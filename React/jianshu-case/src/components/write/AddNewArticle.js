import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Write extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className="ui container">
                <header className="ui header dividing">
                    <h1>写文章</h1>
                </header>
                <form className="ui form">
                    <div className="field">
                        <input type="text"
                            className="form-control"
                            placeholder="标题"/>
                    </div>
                    <div className="fields">
                        <div className="field five wide column required">
                            <div className="ui selection dropdown" id="writeArtical">
                                <input type="hidden" name="album" placeholder="标题" />
                                <div className="default text">选择一个专题</div>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                    'collection'
                                </div>
                            </div>
                        </div>
                        <div className="field eleven wide column">
                            <input type="text"
                                placeholder="回车添加文集"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <textarea
                            placeholder="随便写点文字"
                        ></textarea>
                    </div>
                    <div className="field">
                        <button type="submit" className="ui button primary">保存</button>
                    </div>
                </form>
            </div>
        )
    }
}
