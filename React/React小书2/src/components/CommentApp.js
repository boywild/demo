import React,{Component} from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
export default class CommentApp extends Component{
    test(){
        console.log('===============');
    }
    render(){
        return(
            <div className="wrapper">
                <CommentInput test={this.test}/>
                <Comment />
            </div>
        );
    }
}
