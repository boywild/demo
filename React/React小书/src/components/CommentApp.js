import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './style.css';
class CommentApp extends React.Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
        this.handleSubmitComment=this.handleSubmitComment.bind(this);
        this.handleDeleteComment=this.handleDeleteComment.bind(this);
    }
    handleSubmitComment(comment){
        if(!comment) return;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论内容');
        const comments=this.state.comments;
        comments.push(comment);
        this.setState({
            comments:comments
        });
        this._saveComments(comments);
    }
    handleDeleteComment(index){
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }
    _saveComments(comment){
        localStorage.setItem('comment', JSON.stringify(comment));
    }
    _loadComments () {
      let comments = localStorage.getItem('comment');
      if (comments) {
        comments = JSON.parse(comments)
        this.setState({ comments })
      }
    }

    componentWillMount(){
        this._loadComments();
    }
    render(){
        let {handleSubmitComment,handleDeleteComment}=this;
        let {comments}=this.state;
        return(
            <div className="wrapper">
                <CommentInput onSubmit={handleSubmitComment}/>
                <CommentList comment={comments} onDeleteComment={handleDeleteComment}/>
            </div>
        );
    }
}
export default CommentApp;
