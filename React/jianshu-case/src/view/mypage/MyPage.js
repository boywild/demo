import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AuthorInfo from 'components/mypage/AuthorInfo'
import Aside from 'components/mypage/Aside'
import PreviewList from 'components/public/preview/PreviewList'





export default class componentName extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className="ui container grid">
                <div className="twelve wide column">
                    <AuthorInfo />
                    <div className="ui secondary pointing menu">
                        <span className="active item">
                            'previewsName'
                        </span>
                    </div>
                    <PreviewList />
                </div>
                <div className="four wide column">
                    <Aside />
                </div>
            </div>
        )
    }
}
