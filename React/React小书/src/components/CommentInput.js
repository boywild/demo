import React from 'react';
import './style.css';
class CommentInput extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            content:'',
            publishDate:''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handleContentChange=this.handleContentChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleUsernameBlur=this.handleUsernameBlur.bind(this);
        this._saveUsername=this._saveUsername.bind(this);
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
    handleSubmit(){
        if(this.props.onSubmit){
            let {username,content}=this.state;
            this.props.onSubmit({
                username,content,
                createdTime:+new Date()
            });
        }
        this.setState({
            content:''
        });
    }
    _saveUsername(username){
        localStorage.setItem('username',username);
    }
    handleUsernameBlur(ev){
        if(ev.target.value){
            this._saveUsername(ev.target.value);
        }
    }
    componentWillMount(){
        const username = localStorage.getItem('username')
        if (username) {
          this.setState({ username })
        }
    }
    componentDidMount(){
        this.textarea.focus()
    }
    render(){
        let {username,content}=this.state;
        let {handleUsernameChange,handleContentChange,handleSubmit,handleUsernameBlur}=this;
        return(
            <div>
                <div className='comment-input'>
                  <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                      <input value={username} onBlur={ev=>{
                          handleUsernameBlur(ev);
                      }} onChange={ev=>{
                          handleUsernameChange(ev);
                      }}/>
                    </div>
                  </div>
                  <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                      <textarea ref={(textarea)=>{
                          this.textarea=textarea;
                      }} value={content} onChange={ev=>{
                         handleContentChange(ev);
                      }}/>
                    </div>
                  </div>
                  <div className='comment-field-button'>
                    <button onClick={handleSubmit}>
                      发布
                    </button>
                  </div>
                </div>
            </div>
        );
    }
}
export default CommentInput;
