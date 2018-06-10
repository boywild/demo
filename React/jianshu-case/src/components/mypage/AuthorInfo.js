import React, { Component } from 'react'
import PropTypes from 'prop-types'
import S from './style.scss'


export default class componentName extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className={S.author_info}>
            <a className={S.avatar}><img src='https://img.zcool.cn/community/01568c55dd2b1d32f875a132873691.jpg' alt="userInfo.avatar" /></a>
            <div className={S.title}>
                <a className={S.name}>'userInfo.user_name'</a>
            </div>
        </div>
        )
    }
}
