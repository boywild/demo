import React,{Component} from 'react';
import PT from 'prop-types';
import './style.css';

const propTypes={
    comments:PT.array,
    index:PT.number,
    onDeleteComment:PT.func
}

class Comment extends Component{
    constructor(){
        super();
        this.state={
            timeString:''
        }
    }
    componentWillMount(){
        this._updateTimeString();
        this._timer = setInterval(
          this._updateTimeString.bind(this),
          5000
        )
    }
    componentWillUnmount () {
      clearInterval(this._timer)
    }
    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index);
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
    _getProcessedContent(comment){
        return comment
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/ig,'<code>$1</code>');
    }
    render(){
        return(
            <div>
                <div className='comment'>
                    <div className='comment-user'>
                        <span className="comment-username">{this.props.comments.username}</span>：
                    </div>
                    <p dangerouslySetInnerHTML={{
                        __html:this._getProcessedContent(this.props.comments.content)
                    }}></p>
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
Comment.propTypes=propTypes;
export default Comment;
