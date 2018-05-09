import React,{Component} from 'react';

import CommentListContainers from '../containers/CommentListContainers';
import CommentInputContainers from '../containers/CommentInputContainers';

export default class CommentAppContainers extends Component{
    render(){
        return(
            <div className="wrapper">
                <CommentInputContainers />
                <CommentListContainers />
            </div>
        );
    }
}
