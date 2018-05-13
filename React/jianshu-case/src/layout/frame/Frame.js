import {Route,Redirect} from 'react-router-dom';
import Nav from 'nav/Nav';
import Home from 'view/home/Home.js';
import SignUp from 'view/user/SignUp';
import SignIn from 'view/user/SignIn';
import MyPage from 'view/user/MyPage';
import cfg from 'config/config.json';
import S from './frame.scss';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myInfo:null,
            singInMsg:null,
            signUpMsg:null,
            hasloginReq:false,
            myPagePreview:[],
            notebooks:[],
            previewsName:'所有文章'
        };
        this.signInAjax=this.signInAjax.bind(this);
        this.signUpAjax=this.signUpAjax.bind(this);
        this.clearLoginMsg=this.clearLoginMsg.bind(this);
        this.initMyInfo=this.initMyInfo.bind(this);
        this.loginOut=this.loginOut.bind(this);
        this.getPreview=this.getPreview.bind(this);
        this.initMyPage=this.initMyPage.bind(this);
        this.changePreviewsName=this.changePreviewsName.bind(this);
    }
    initMyInfo(myInfo){
        let {avatar,username,id,user_intro}=myInfo;
        if(myInfo){
            avatar=cfg.url+avatar;
        }
        this.setState({
            myInfo:{
                user_name:username,
                user_id:id,
                user_intro:user_intro,
                avatar:avatar
            }
        });
    }
    clearLoginMsg(){
        this.setState({
            singInMsg:null,
            signUpMsg:null
        });
    }
    signInAjax(reqData){
        $.post(`${cfg.url}/login`,reqData)
        .done((res)=>{
            let {code,data}=res;
            if(res.code===0){
                this.initMyInfo(data)
            }else{
                this.setState({
                    singInMsg:res
                });
            }
        })
    }
    signUpAjax(reqData){
        $.post(`${cfg.url}/register`,reqData)
        .done((res)=>{
            let {code,data}=res;
            this.setState({
                signUpMsg:res
            });
        })
    }
    loginOut(){
        $.post(`${cfg.url}/logout`)
        .done(({code})=>{
            if(code===0){
                this.initMyInfo(null)
            }
        })
    }
    getPreview(data){
        $.post(`${cfg.url}/getPreview`,data)
        .done(({code,data})=>{
            if(code===0){
                this.setState({
                    myPagePreview:data
                });
            }
        })
    }
    initMyPage(user_id,previewsData,previewsName){
        this.getPreview(previewsData);
        $.post(`${cfg.url}/getCollection`,{
            user_id
        })
        .done(({code,data})=>{

            if(code===0){
                this.setState({
                    notebooks:data,
                    previewsName
                });
            }
        })
    }
    changePreviewsName(previewsName){
        this.setState({
            previewsName
        });
    }
    componentDidMount(){
        $.post(`${cfg.url}/autologin`)
        .done((res)=>{
            let {code ,data}=res;
            if(code===0){
                this.initMyInfo(data);
            }
            this.setState({
                hasloginReq:true
            });
        });
        let {state,pathname}=this.props.location;
        if(state){
            let {user_id}=state.userInfo;
            if(pathname==='/my_page'){
                this.initMyPage(user_id,{user_id},'所有文章');
            }

        }
    }
    render(){
        let {signInAjax,signUpAjax,clearLoginMsg,loginOut,initMyPage}=this;
        let {singInMsg,signUpMsg,myInfo,hasloginReq,previewsName,myPagePreview,notebooks}=this.state;
        let {history}=this.props;
        if(!hasloginReq){
            return (<div></div>);
        }
        return (
            <div className={S.layout}>
                <Nav {...{myInfo,loginOut,initMyPage,history}} />
                <Route exact path="/" render={
                    (props)=>(
                        <Home
                            {...{initMyPage,history}}
                            {...props}
                        />
                    )
                }/>
                <Route exact path="/sign_in" render={(props)=>(
                    myInfo?(
                        <Redirect to="/" />
                    ):(
                        <SignIn {...{signInAjax,singInMsg,clearLoginMsg}} />
                    )
                )}/>
                <Route exact path="/sign_up" render={
                    (props)=>(
                        myInfo?(
                            <Redirect to="/" />
                        ):(
                            <SignUp {...{signUpAjax,signUpMsg,clearLoginMsg}} />
                        )
                    )
                }/>
                <Route exact path="/my_page" render={
                    (props)=>(
                        props.location.state
                            ?(<MyPage
                                {...{previewsName,myPagePreview,notebooks}}
                                {...props}
                              />
                            ):(
                                <Redirect to="/" />
                            )

                    )
                }/>
            </div>
        );
    }
}
