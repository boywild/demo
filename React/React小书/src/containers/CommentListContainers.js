import React,{Component} from 'react';
import {connect} from 'react-redux';


import CommentList  from '../components/CommentList';

class CommentListContainers extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }
    componentWillMount(){
        this._loadComment();
    }
    _loadComment(){
        let comments=localStorage.getItem('comments');
        if(comments){
            comments=JSON.parse(comments);
            this.setState({
                comments
            });
        }

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
        localStorage.setItem('comments',JSON.stringify(comments));
    }
    render(){
        return(
            <CommentList
                comments={this.state.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)}
            />
        );
    }
}
const mapStateToProps=(state)=>{
    return {

    }
}
const mapDispatchToProps=(dispatch)=>{

}
export default CommentListContainers;
