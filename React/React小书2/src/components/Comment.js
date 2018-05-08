import React,{Component} from 'react';
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
    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index);
        }
    }
    _updateTimeString(){
        let comment=this.props.comment;
        let duration=(+new Date()-comment.createdTime)/1000;
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
                        <span>{this.props.comment.username}</span>：
                    </div>
                    <p>{this.props.comment.content}</p>
                    <span className='comment-createdtime'>
                        {this.state.timeString}
                    </span>
                    <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
                        删除
                    </span>
                </div>
            </div>
        );
    }
}
