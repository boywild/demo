import React, { Component } from 'react'
import PropTypes from 'prop-types'
import S from './style.scss'
export default class SignOut extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className={S.sign_panel}>
                'resInfo'
                <form className="ui form">
                    <div className={`field`}>
                        <input type="text" placeholder="用户名" />
                    </div>
                    nameErrorMsg
                    <div className={`field`}>
                        <input type="password" placeholder="密码" />
                    </div>
                    passwErrorMsg
                    <div className={`field`}>
                        <input type="password" placeholder="确认密码" />
                    </div>
                    newpasswErrorMsg
                    <div className="field">
                        <button type="submit" className="ui button fluid primary">注册</button>
                    </div>
                </form>
            </div>
        )
    }
}
