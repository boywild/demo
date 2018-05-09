import React,{Component} from 'react';
import CommentInput from '../components/CommentInput';

class CommentInputContainers extends Component{
    constructor () {
      super()
      this.state = { username: '' }
    }
    componentWillMount(){
        this._loadUsername();
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
    handleSubmitComment(comment){
        if(!comment) return;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论内容');
        const { comments } = this.props
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))
        // this.props.onSubmit 是 connect 传进来的
        // 会 dispatch 一个 action 去新增评论
        if (this.props.onSubmit) {
          this.props.onSubmit(comment)
        }
    }
    render(){
        return(
            <CommentInput
                username={this.state.username}
                onUserNameInputBlur={this._saveUername.bind(this)}
                onSubmit={this.handleSubmitComment.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
}


CommentInputContainers=connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)

export default CommentInputContainers;
