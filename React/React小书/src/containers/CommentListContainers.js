import React,{Component} from 'react';
import {connect} from 'react-redux';
import CommentList from '../components/CommentList';
import {initComments,deleteComments} from '../reducers/comments-reducer';

class CommentListContainers extends Component{
    constructor(){
        super();
    }
    componentWillMount(){
        this._loadComments();
    }
    handleDeleteComment(index){
        let {comments}=this.props;
        let newComments=[
            ...comments.slice(0, index),
            ...comments.slice(index + 1)
        ];
        localStorage.setItem('comments', JSON.stringify(newComments))
        this.props.deleteComments&&this.props.deleteComments(index);
    }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments));
    }
    _loadComments(){
        let comments=localStorage.getItem('comments');
        comments=comments?JSON.parse(comments):[];
        this.props.initComments&&this.props.initComments(comments);
    }

    render(){
        return(
            <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
        );
    }
}

let mapStateToProps=(state)=>{
    return {
        comments:state.comments
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        initComments:function(comments){
            dispatch(initComments(comments));
        },
        onDeleteComment:function(commentsIndex){
            dispatch(deleteComments(commentsIndex));
        }
    }
}

CommentListContainers=connect(mapStateToProps,mapDispatchToProps)(CommentListContainers)
export default CommentListContainers;
