import React,{Component} from 'react';
import PT from 'prop-types';
import Comment from './Comment';

export default class CommentList extends Component{
    static defaultProps={
        comments:[]
    }
    constructor(props){
        super(props);
    }
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
