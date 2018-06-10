import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
                            <a className={S.active}>登陆</a>
                            <b>.</b>
                            <a>注册</a>
                        </div>
                    </h4>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
