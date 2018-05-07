import React,{Component} from 'react';
import './style.css';

export default class CommentInput extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            content:''
        }
        this.handleUserChange=this.handleUserChange.bind(this);
        this.handleContentChange=this.handleContentChange.bind(this);
    }
    handleUserChange(ev){
        this.setState({
            username:ev.target.value
        });
    }
    handleContentChange(ev){
        this.setState({
            content:ev.target.value
        });
    }
    onPublish(){
        let {username,content}=this.state;
        if(username==='') return;
        if(content==='') return;
        console.log(username);
        this.props.test();
    }
    render(){
        let {handleUserChange,handleContentChange}=this;
        return(
            <div>
                <div className='comment-input'>
                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                            <input value={this.state.username} onChange={(ev)=>{
                                handleUserChange(ev)
                            }} />
                        </div>
                    </div>
                    <div className='comment-field'>
                        <span className='comment-field-name'>评论内容：</span>
                        <div className='comment-field-input'>
                            <textarea value={this.state.content} onChange={(ev)=>{
                                handleContentChange(ev)
                            }} />
                        </div>
                    </div>
                    <div className='comment-field-button'>
                        <button onClick={this.onPublish.bind(this)}>
                            发布
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
