import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink ,Link } from 'react-router-dom'
import S from './style.scss'


export default class Panle extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className="ui stackable grid container center aligned">
                <div className={`six wide column ${S.main}`}>
                    <h4 className={S.title}>
                        <div className={S['normal-title']}>
                            {/* <a>登陆</a> */}
                            <NavLink to='/sign_in' activeClassName={S.active}>登陆</NavLink>
                            <b>.</b>
                            {/* <a>注册</a> */}
                            <NavLink to='/sign_up' activeClassName={S.active}>注册</NavLink>
                        </div>
                    </h4>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
