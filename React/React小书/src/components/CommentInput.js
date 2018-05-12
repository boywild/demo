import React,{Component} from 'react';
import PT from 'prop-types';
import './style.css';
const propTypes={
    onSubmit:PT.func
}
class CommentInput extends Component{
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            content:''
        }
    }
    componentWillMount(){
        // this._loadUsername();
    }
    componentDidMount(){
        this.textarea.focus();
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
            this.props.onSubmit({username,content,createdtime:+new Date()});
        }
        this.setState({
            content:''
        });
    }
    // _loadUsername(){
    //     let username=localStorage.getItem('username');
    //     if(username){
    //         this.setState({
    //             username:username
    //         });
    //     }
    //
    // }
    handleUsernameBlur(ev){
        if(!ev.target.value) return;
        if(this.props.onUserNameInputBlur){
            this.props.onUserNameInputBlur(ev.target.value);
        }
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
                                onBlur={this.handleUsernameBlur.bind(this)}
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
CommentInput.propTypes=propTypes;
export default CommentInput;
