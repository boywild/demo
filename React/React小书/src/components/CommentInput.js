import React,{Component} from 'react';
import './style.css';

export default class CommentInput extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            content:''
        }
    }
    componentWillMount(){
        this._loadUsername();
    }
    handleUsernameChange(ev){
        this.setState({
            username:ev.target.value
        });
    }
    handleContentChange(ev){
        this.setState({
            content:ev.target.value
        });
    }
    handleUsernameBlur(ev){
        if(!ev.target.value) return;
        this._saveUername(ev.target.value);
    }
    handleSubmit(){
        if(this.props.onSubmit){
            let {username,content}=this.state;
            this.props.onSubmit({username,content,createdTime:+new Date()});
        }
        this.setState({
            content:''
        });
    }
    _saveUername(username){
        localStorage.setItem('username',username);
    }
    _loadUsername(){
        let username=localStorage.getItem('username');
        if(username){
            this.setState({
                username
            });
        }
    }
    componentDidMount(){
        this.textarea.focus();
    }
    render(){
        let {handleUsernameChange,handleContentChange}=this;
        return(
            <div>
                <div className='comment-input'>
                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                            <input
                                value={this.state.username}
                                onBlur={this.handleUsernameBlur.bind(this)}
                                onChange={this.handleUsernameChange.bind(this)}
                            />
                        </div>
                    </div>
                    <div className='comment-field'>
                        <span className='comment-field-name'>评论内容：</span>
                        <div className='comment-field-input'>
                            <textarea ref={(textarea)=> this.textarea=textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                        </div>
                    </div>
                    <div className='comment-field-button'>
                        <button onClick={this.handleSubmit.bind(this)}>
                            发布
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
