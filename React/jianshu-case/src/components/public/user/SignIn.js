import React, { Component } from 'react'
import PropTypes from 'prop-types'
import S from './style.scss'


export default class SignIn extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className={S.sign_panel}>
                'infoMsg'
                <form className="ui form">
                    <div className={`field`}>
                        <input type="text" placeholder="用户名"/>
                    </div>
                    aasdf
                    <div className={`field`}>
                        <input type="password" placeholder="密码"/>
                    </div>
                    asdf
                    <div className="field">
                        <button type="submit" className="ui button fluid primary">登陆</button>
                    </div>
                </form>
            </div>
        )
    }
}
