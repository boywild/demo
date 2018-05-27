import {NavLink,Link} from 'react-router-dom';
import S from './Nav.scss';
let propTypes={
    myInfo:PT.object,
    loginOut:PT.func
};
export default function Nav(props) {
    let {myInfo,loginOut,history,initMyPage}=props;

    let navGroup=null;
    if(myInfo){
        let {user_id}=myInfo;
        navGroup=(
            <NavLink to="/my_page"
                onClick={ev=>{
                    ev.stopPropagation();
                    ev.preventDefault();
                    history.push('/my_page',{userInfo:myInfo});
                    initMyPage(user_id,{user_id},'所有文章')
                }}
                className={`${S.avatar} item`}
            activeClassName="active">
                <img src={myInfo.avatar} className="ui image avatar" alt=""/>
                <div className={S.dropDown} onClick={(ev)=>{
                    ev.stopPropagation();
                    ev.preventDefault();
                    loginOut();
                }}>
                    <p>注销</p>
                </div>
            </NavLink>
        );
    }else{
        navGroup=[
            (<NavLink to="/sign_in" className={`item`} activeClassName={'active'} key={1}>登陆</NavLink>),
            (<NavLink to="/sign_up" className={`item`} activeClassName={'active'} key={2}>注册</NavLink>)
        ];
    }
    return (
        <div className={`ui fixed secondary pointing menu ${S.nav}`}>
            <div className="ui container">
                <Link to="/" className={`header item`}>Noodes</Link>
                <NavLink exact to="/" className={`item`}>首页</NavLink>
                <div className="menu right">
                    {navGroup}
                    <NavLink to="/write" className={`item`} activeClassName={'active'}>写文章</NavLink>
                </div>
            </div>
        </div>
    );
}
Nav.propTypes=propTypes;
