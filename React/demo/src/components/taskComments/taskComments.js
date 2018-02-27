import React, {Component} from 'react';
import CommentsTit from 'taskCommentsTit/taskCommentsTit.js';
import CommentsLis from 'taskCommentsLis/taskCommentsLis.js';

export default class CommentsBox extends Component{
    render(){
        const rows=[];
        let lastCategory = null;
        let {taskData}=this.props;
        let test=taskData.map((ele,index)=>{
            if (ele.date !== lastCategory) {
              rows.push(
                  <CommentsTit key={ele.date} {...ele}/>,
                  <CommentsLis key={ele.name} {...ele}/>
              );
          }else{
              rows.push(
                  <CommentsLis key={ele.name} {...ele}/>
              );
          }
            lastCategory = ele.date;
            console.log(ele);
        });

        return(
            <div className="ui container">
                <h3 className="main-tit">Comments</h3>
                {rows}
            </div>
        )
    }
}
