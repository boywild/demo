import React,{Component} from 'react';
import PT from 'prop-types';
import './style.css';

export default class Comment extends Component{
    constructor(){
        super();
        this.state={
            timeString:''
        }
    }
    componentWillMount(){
        this._updateTimeString();
    }
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index);
        }
    }
    _updateTimeString(){
        let {createdtime}=this.props.comments;
        let duration=(+new Date()-createdtime)/1000;
        this.setState({
            timeString:duration>60
            ?`${Math.round(duration/60)} 分钟前`
            :`${Math.round(Math.max(duration,1))} 秒前`
        });
    }
    render(){
        return(
            <div>
                <div className='comment'>
                    <div className='comment-user'>
                        <span className="comment-username">{this.props.comments.username}</span>：
                    </div>
                    <p>{this.props.comments.content}</p>
                    <span className='comment-createdtime'>
                        {this.state.timeString}
                    </span>
                    <span className='comment-delete' onClick={this.handleDeleteComment.bind(this,this.props.index)}>
                        删除
                    </span>
                </div>
            </div>
        );
    }
}
