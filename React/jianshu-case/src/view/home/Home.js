import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cfg from 'common/config.json';
import PreviewList from 'components/public/preview/PreviewList'
import Recommend from 'components/home/Recommend'


export default class Home extends Component {
    // static propTypes = {

    // }
    constructor(){
        super();
        this.state={
            previews:[],
            author:[]
        }
        this.getPreview=this.getPreview.bind(this);
        this.getAuthor=this.getAuthor.bind(this);
    }
    componentWillMount(){
        this.getPreview();
        this.getAuthor();
    }
    getPreview(){
        $.post(`${cfg.url}/getPreview`)
        .then(({code,data})=>{
            this.setState({
                previews:data
            });
        })
    }
    getAuthor(){
        $.post(`${cfg.url}/getAuthor`)
        .done(({code,data})=>{
            this.setState({
                author:data
            });
            console.log(data);
        })
    }
    render() {
        let {previews,author}=this.state;
        return (
            <div className="ui container grid">
                <div className="column twelve wide">
                    <PreviewList {...{previews}}/>
                </div>
                <div className="column four wide">
                    {/* <Recommend {...{ authors, initMyPage, history }} /> */}
                    <Recommend {...{author}}/>
                </div>
            </div>
        )
    }
}
