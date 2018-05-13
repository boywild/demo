import React,{Component} from 'react';
import {connect} from 'react-redux';
import {initComments,deleteComment} from '../reducer/comments-reducer';

import CommentList  from '../components/CommentList';

class CommentListContainers extends Component{
    componentWillMount(){
        this._loadComment();
    }
    _loadComment(){
        let comments=localStorage.getItem('comments');
        comments=comments?JSON.parse(comments):[];
        this.props.initComments(comments);
    }
    handleDeleteComment(index){
        let {comments}=this.props;
        let newComments=[
            ...comments.slice(0,index),
            ...comments.slice(index+1)
        ];
        localStorage.setItem('comments',JSON.stringify(newComments));
        this.props.onDeleteComment&&this.props.onDeleteComment(index);
    }
    render(){
        return(
            <CommentList
                comments={this.props.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)}
            />
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        comments:state.comments
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        initComments:(comments)=>{
            dispatch(initComments(comments))
        },
        onDeleteComment:(commentIndex)=>{
            dispatch(deleteComment(commentIndex));
        }
    }
}
CommentListContainers=connect(mapStateToProps,mapDispatchToProps)(CommentListContainers);
export default CommentListContainers;
