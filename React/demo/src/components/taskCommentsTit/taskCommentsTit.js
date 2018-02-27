import React ,{Component} from 'react';

export default class CommentsTit extends Component{
    render(){
        let {date}=this.props;
        return(
            <h3 className="comment-tit">{date}</h3>
        )
    }
}
