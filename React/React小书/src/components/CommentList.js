import React,{Component} from 'react';
import PT from 'prop-types';
import Comment from './Comment';

const propTypes={
    comments:PT.any,
    onDeleteComment:PT.func
}

class CommentList extends Component{
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index);
        }
    }
    render(){
        return(
            <div>{
                this.props.comments.map((comments,index)=>{
                    return <Comment comments={comments} key={index} index={index} onDeleteComment={this.handleDeleteComment.bind(this)}/>
                })
            }

            </div>
        );
    }
}
CommentList.propTypes=propTypes;
export default CommentList;
