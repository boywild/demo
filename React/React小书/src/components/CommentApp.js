import React,{Component} from 'react';
import PT from 'prop-types';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }
    componentWillMount(){
        this._loadComment();
    }
    handleSubmit(comment){
        let commentList=this.state.comments;
        commentList.push(comment);
        this.setState({
            comments:commentList
        });
        this._saveComment(commentList);
    }
    handleDeleteComment(index){
        let {comments}=this.state;
        comments.splice(index,1);
        this.setState({
            comments:comments
        });
        this._saveComment(comments);
    }
    _saveComment(comments){
        comments=JSON.stringify(comments);
        localStorage.setItem('comments',comments);
    }
    _loadComment(){
        let comments=localStorage.getItem('comments');
        if(comments){
            this.setState({
                comments:JSON.parse(comments)
            });
        }

    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        );
    }
}

export default CommentApp;
