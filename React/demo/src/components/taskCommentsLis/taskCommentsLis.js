import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import Replay from 'taskReplay/taskReplay.js';

export default class CommentsLis extends Component{
    constructor(){
        super();
        this.state={
            showReplay:false
        }
    }
    render(){
        let {avatar,name,time,content,subComment}=this.props;
        let rows=[];
        let {showReplay}=this.state;
        let replayFlag=showReplay?'show':'';
        if(subComment&&subComment.length>0){
            console.warn(rows);
            subComment.forEach((ele)=>{
                rows.push(
                    <CommentsLis key={ele.name} {...ele} />
                )
            })
        }

        return(
            <dl className="comment-list">
                <dt>
                    <img src={avatar} />
                    <div className="comment-info">
                        <p><span>{name}</span><i>{time}</i></p>
                        <b>{content}</b>
                        <a
                        onClick={()=>{
                            let {showReplay}=this.state;
                            showReplay=!showReplay;
                            this.setState({
                                showReplay:showReplay
                            });
                        }}
                        >回复</a>
                    </div>
                </dt>
                <dd>
                    <div className={`${replayFlag} replay-outer`}>
                        <Replay />
                    </div>
                    {rows}
                </dd>
            </dl>
        )
    }
}
CommentsLis.propTypes={
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    subComment:PropTypes.func
}
CommentsLis.defaultProps={
    name:'chentian'
}
