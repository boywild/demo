import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment}  from '../reducer/comments-reducer';
import CommentInput from '../components/CommentInput';

class CommentInputContainers extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            comments:[]
        }
    }
    componentWillMount(){
        this._loadUsername();
    }
    _loadUsername(){
        let username=localStorage.getItem('username');
        if(username){
            this.setState({
                username:username
            });
        }
    }
    _saveUsername(username){
        localStorage.setItem('username',username);
    }
    handleSubmitComment(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')

        let commentList=this.props.comments;
        let newComments=[
            ...commentList,
            comment
        ];
        // this.setState({
        //     comments:commentList
        // });
        // this._saveComment(newComments);
        localStorage.setItem('comments',JSON.stringify(newComments));
        if(this.props.onSubmit){
            this.props.onSubmit(comment);
        }

    }
    // _saveComment(comments){
    //     localStorage.setItem('comments',JSON.stringify(comments));
    // }
    render(){
        return(
            <CommentInput
                username={this.state.username}
                onUserNameInputBlur={this._saveUsername.bind(this)}
                onSubmit={this.handleSubmitComment.bind(this)}
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
        onSubmit:(comment)=>{
            dispatch(addComment(comment))
        }
    }
}
CommentInputContainers=connect(mapStateToProps,mapDispatchToProps)(CommentInputContainers);
export default CommentInputContainers;
