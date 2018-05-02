import React from 'react';

class Comment extends React.Component{
    constructor(){
        super();
        this.state={
            timeString:''
        };
        this._updateTimeString=this._updateTimeString.bind(this);
        this.handleDeleteComment=this.handleDeleteComment.bind(this);
        // this._getProcessedContent=this._getProcessedContent.bind(this);
    }
    componentWillMount(){
        this._updateTimeString();
        this.timer=setInterval(()=>{
            this._updateTimeString();
        },5000)
    }
    _updateTimeString(){
        const comments=this.props.comment;
        const duration=(+Date.now()-comments.createdTime)/1000;
        this.setState({
            timeString:duration>60
            ?`${Math.round(duration/60)} 分钟前`
            :`${Math.round(Math.max(duration,1))} 秒前`
        });
    }
    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index);
        }
    }
    _getProcessedContent (content) {
      return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    commentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        let {handleDeleteComment}=this;
        return(
            <div>
                <div className='comment'>
                  <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                  </div>
                  <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                  }} />
                  <span className='comment-createdtime'>
                      {this.state.timeString}
                  </span>
                  <span className='comment-delete' onClick={handleDeleteComment}>
                      删除
                  </span>
                </div>
            </div>
        );
    }
}
export default Comment;
