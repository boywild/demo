import React,{Component} from 'react';
import PT from 'prop-types';
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
        if(!ev.target.value) return;
        this.setState({
            username:ev.target.value
        });
    }
    handleContentChange(ev){
        if(!ev.target.value) return;
        this.setState({
            content:ev.target.value
        });
    }
    handleSubmit(){
        if(this.props.onSubmit){
            let {username,content}=this.state;
            this.props.onSubmit({username,content,createdtime:+new Date()});
        }
        this.setState({
            content:''
        });
    }
    _loadUsername(){
        let username=localStorage.getItem('username');
        this.setState({
            username:username
        });
    }
    _onBlurSaveUsername(ev){
        if(!ev.target.value) return;
        localStorage.setItem('username',ev.target.value);
    }
    componentDidMount(){
        this.textarea.focus();
    }
    render(){
        return(
            <div>
                <div className='comment-input'>
                    <div className='comment-field'>
                        <span className='comment-field-name'>用户名：</span>
                        <div className='comment-field-input'>
                            <input type="text"
                                value={this.state.username}
                                onBlur={this._onBlurSaveUsername.bind(this)}
                                onChange={this.handleUsernameChange.bind(this)}
                            />
                        </div>
                    </div>
                    <div className='comment-field'>
                        <span className='comment-field-name'>评论内容：</span>
                        <div className='comment-field-input'>
                            <textarea value={this.state.content} ref={(textarea)=> this.textarea=textarea} onChange={this.handleContentChange.bind(this)} />
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
