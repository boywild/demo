import React,{Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component{
    static defaultProps={
        comments:[]
    }
    constructor(){
        super();
    }
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index);
        }
    }
    render(){
        return(
            <div>
                {
                    this.props.comments.map((ele,index)=>{
                        return (<Comment key={index} comment={ele} index={index} onDeleteComment={this.handleDeleteComment.bind(this)} />);
                    })
                }
            </div>
        );
    }
}
