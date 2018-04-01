import {Route} from 'react-router-dom';
import Nav from 'nav/Nav';
import Home from 'view/home/Home.js';
import SignUp from 'view/user/SignUp';
import SignIn from 'view/user/SignIn';
import cfg from 'config/config.json';
import S from './frame.scss';
require('semantic/dist/semantic.min.css');
require('semantic/dist/semantic.min.js');
export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.signInAjax=this.signInAjax.bind(this);
    }
    signInAjax(reqData){
        $.post(`${cfg.url}/login`,reqData)
        .done((res)=>{
            console.log(res);
        })
    }
    render(){
        let {signInAjax}=this;
        return (
            <div className={S.layout}>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sign_in" render={(props)=>{
                    return (
                        <SignUp {...{signInAjax}} />
                    );
                }}/>
                <Route exact path="/sign_up" component={SignUp}/>
            </div>
        );
    }
}
