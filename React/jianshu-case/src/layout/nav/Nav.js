import {NavLink,Link} from 'react-router-dom';
import S from './Nav.scss';
export default function Nav() {
    return (
        <div className={`ui fixed secondary pointing menu ${S.nav}`}>
            <div className="ui container">
                <Link to="/" className={`header item`}>Noodes</Link>
                <NavLink exact to="/" className={`item`}>首页</NavLink>
                <div className="menu right">
                    <NavLink to="/sign_in" className={`item`} activeClassName={'active'}>登陆</NavLink>
                    <NavLink to="/sign_up" className={`item`} activeClassName={'active'}>注册</NavLink>
                    <NavLink to="/write" className={`item`} activeClassName={'active'}>写文章</NavLink>
                </div>
            </div>
        </div>
    );
}
