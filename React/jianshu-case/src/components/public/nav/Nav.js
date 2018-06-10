import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink ,Link } from 'react-router-dom'

import S from './Nav.scss';

const propTypes = {

}

class Nav extends Component {
    render() {
        return (
            <div className={`ui fixed secondary pointing menu ${S.nav}`}>
                <div className="ui container">
                    <Link to="/" className={`header item`}>Noodes</Link>
                    <NavLink exact to="/" className={`item`} >首页</NavLink>
                    <div className="menu right">
                        {/* {navGroup} */}
                        <NavLink to="/write" className={`item`} activeClassName={'active'}>写文章</NavLink>
                        <NavLink to="/sign_in" className={`item`} activeClassName={'active'}>登陆</NavLink>
                        <NavLink to="/sign_up" className={`item`} activeClassName={'active'}>注册</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
Nav.propTypes=propTypes;
export default Nav;