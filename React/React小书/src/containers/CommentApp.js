import React,{Component} from 'react';
// import {createStore} from 'redux';
// import {connect} from 'react-redux';

import CommentInputContainers from './CommentInputContainers';
import CommentListContainers from './CommentListContainers';

class CommentApp extends Component{
    constructor(){
        super();
        // this.state={
        //     comments:[]
        // }
    }
    // componentWillMount(){
    //     this._loadComment();
    // }

    // handleSubmitComment(comment){
    //     if (!comment) return
    //     if (!comment.username) return alert('请输入用户名')
    //     if (!comment.content) return alert('请输入评论内容')
    //     let commentList=this.state.comments;
    //     commentList.push(comment);
    //     this.setState({
    //         comments:commentList
    //     });
    //     this._saveComment(commentList);
    // }

    // handleDeleteComment(index){
    //     let {comments}=this.state;
    //     comments.splice(index,1);
    //     this.setState({
    //         comments:comments
    //     });
    //     this._saveComment(comments);
    // }

    // _saveComment(comments){
    //     localStorage.setItem('comments',JSON.stringify(comments));
    // }

    // _loadComment(){
    //     let comments=localStorage.getItem('comments');
    //     if(comments){
    //         comments=JSON.parse(comments);
    //         this.setState({
    //             comments
    //         });
    //     }
    //
    // }

    render(){
        return(
            <div className="wrapper">
                {/* <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/> */}
                <CommentInputContainers />
                {/* <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/> */}
                <CommentListContainers />
            </div>
        );
    }
}

export default CommentApp;
