/*
 * @Author: chentian 
 * @Date: 2018-06-11 22:29:35 
 * ----- 
 * @Modified By: chentian 
 * @Last Modified: 2018-06-11 22:29:35 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import S from './style.scss'



export default class SignIn extends Component {
    // static propTypes = {

    // }
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
        this.userNameChange=this.userNameChange.bind(this);
    }

    render() {
        let {username,password}=this.state;
        let {userNameChange}=this.props;
        return (
            <div className={S.sign_panel}>
                <form className="ui form">
                    <div className={`field`}>
                        <input type="text" placeholder="用户名" value={username} onChange={userNameChange()}/>
                    </div>
                    <div className={`field`}>
                        <input type="password" placeholder="密码"/>
                    </div>
                    <div className="field">
                        <button type="submit" className="ui button fluid primary">登陆</button>
                    </div>
                </form>
            </div>
        )
    }
}
