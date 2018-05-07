import React,{Component} from 'react';
import './style.css';

export default class CommentList extends Component{

    render(){
        return(
            <div>
                <div className='comment'>
                    <div className='comment-user'>
                        <span>chentian</span>：
                    </div>
                    <p>asdfsdfasdfas</p>
                    <span className='comment-createdtime'>
                        2028-2-2
                    </span>
                    <span className='comment-delete'>
                        删除
                    </span>
                </div>
            </div>
        );
    }
}
