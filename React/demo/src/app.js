import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Nav from 'nav/Nav.js';
import Home from 'home/Home.js';
import CardWrap from 'cardWrap/CardWrap.js';
import Card from 'card/Card.js';


// import CommentsBox from 'taskComments/taskComments.js';
// import Input from 'taskInput/taskInput.js';

require('../semantic/dist/semantic.css');
require('./common/style/main.css');
let data = [
    {
        imgSrc: require('img/matthew.png'),
        name: 'Matt',
        meta: 'Friends',
        desc: 'Matthew is an interior designer living in New York.',
        joined: 2013,
        likeNum: 75
    },
    {
        imgSrc: require('img/molly.png'),
        name: 'Molly',
        meta: 'Coworker',
        desc: 'Molly is a personal assistant living in Paris.',
        joined: 2013,
        likeNum: 35
    },
    {
        imgSrc: require('img/elyse.png'),
        name: 'Elyse',
        meta: 'Coworker',
        desc: 'Elyse is a copywriter working in New York.',
        joined: 2014,
        likeNum: 151
    }
];
// let taskData = [
//     {date: '今天', time: '11:20', name: 'Matt', content: '你好', avatar: require("img/molly.png")},
//     {
//         date: '今天', time: '11:20', name: 'Jenny', content: '你好', avatar: require("img/molly.png"),
//         subComment: [
//             { time: '11:20',name: 'Sal', content: '你好', avatar: require("img/molly.png")},
//             { time: '11:20',name: 'Jenny', content: '你好', avatar: require("img/molly.png")},
//             { time: '11:20',name: 'Elliot', content: '你好', avatar: require("img/molly.png")},
//             { time: '11:20',name: 'Molly', content: '你好', avatar: require("img/molly.png")}
//         ]
//     },
//     {date: '今天', time: '11:20', name: 'Molly', content: '你好', avatar: require("img/molly.png")},
//     {date: '今天', time: '11:20', name: 'Elliot', content: '你好', avatar: require("img/molly.png")},
//     {date: '昨天', time: '11:20', name: 'Sal', content: '你好', avatar: require("img/molly.png")},
//     {date: '昨天', time: '11:20', name: 'Mike', content: '你好', avatar: require("img/molly.png")},
//     {date: '前天', time: '11:20', name: 'Sal', content: '你好', avatar: require("img/molly.png")},
//     {
//         date: '前天', time: '11:20', name: 'Hurley', content: '你好', avatar: require("img/molly.png"),
//         subComment: [
//             {
//                 time: '11:20',name: 'Sal', content: '你好', avatar: require("img/molly.png"),
//                 subComment: [
//                     {
//                          time: '11:20',name: 'Sal', content: '你好', avatar: require("img/molly.png"),
//                         subComment: [
//                             { time: '11:20',name: 'Molly', content: '你好', avatar: require("img/molly.png")}
//                         ]
//                     },
//                     { time: '11:20',name: 'Jenny', content: '你好', avatar: require("img/molly.png")},
//                     { time: '11:20',name: 'Elliot', content: '你好', avatar: require("img/molly.png")},
//                     { time: '11:20',name: 'Molly', content: '你好', avatar: require("img/molly.png")}
//                 ]
//             }
//         ]
//     },
//     {date: '前天',  time: '11:20', name: 'Ben', content: '你好', avatar: require("img/molly.png")},
//     {date: '前天',  time: '11:20', name: 'Jane', content: '你好', avatar: require("img/molly.png")}
// ];

class App extends Component{
    constructor(){
        super();
        this.state={
            view:'home'
        }
        this.changeView=this.changeView.bind(this);
    }
    getChildContext() {
        return{
            et:'died'
        }
    }
    changeView(view){
        this.setState({
            view:view
        });
    }
    render(){
        let {data}=this.props;
        let {view}=this.state;
        let goView=null;
        switch (view) {
            case 'list':
                goView=<CardWrap data={data}/>;
                break;
            case 'home':
                goView=<Home/>;
                break;
            default:

        }
        return(
            <div className="ui container">
                <div className="ui dividing"></div>
                <Nav changeView={this.changeView}/>
                {goView}
            </div>
        )
    }
}
App.childContextTypes={
    et:PropTypes.string
}
ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <div className="wrapper">
//         <CommentsBox taskData={taskData}/>
//         <Input />
//     </div>,
//     document.getElementById('root')
// );
if(module.hot){ 
    module.hot.accept()
}
