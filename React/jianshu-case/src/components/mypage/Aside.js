import React, { Component } from 'react'
import PropTypes from 'prop-types'
import S from './style.scss'


export default class componentName extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className={S.aside}>
                <div className="introduce">
                    <div className="title">
                        个人介绍
                        <div className="ui divider hidden"></div>
                        <p>userInfo.user_intro</p>
                    </div>
                </div>
                <div className="ui divider hidden"></div>
                <div className={S.volume}>
                    <div className={S.title}>
                        我的文集
                    </div>
                    <div className="ui list">
                        'notebooks'
                    </div>
                </div>
            </div>
        )
    }
}
