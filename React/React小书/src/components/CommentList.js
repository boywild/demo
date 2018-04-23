import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component{
    constructor(){
        super();
        this.handleDeleteComment=this.handleDeleteComment.bind(this);
    }
    static defaultProps={
        comment:[]
    }
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index);
        }
    }
    render(){
        let {handleDeleteComment}=this
        return(
            <div>{
                this.props.comment.map((ele,index)=>{
                    return (
                        <Comment key={index} comment={ele} index={index} onDeleteComment={handleDeleteComment}/>
                    );
                })
                }
            </div>
        );
    }
}
export default CommentList;
