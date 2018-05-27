import S from './style.scss';
import cfg from 'config/config.json';

export default class Aside extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inEdit:false,
            editValue:''
        }
        this.editMe=this.editMe.bind(this);
        this.editContent=this.editContent.bind(this);
        this.cancelEdit=this.cancelEdit.bind(this);
        this.editDone=this.editDone.bind(this);
    }
    editMe(){
        this.setState({
            inEdit:true,
            editValue:this.props.userInfo.user_intro
        });
    }
    editContent(ev){
        this.setState({
            editValue:ev.target.value
        });
    }
    cancelEdit(ev){
        ev.stopPropagation();
        ev.preventDefault();
        this.setState({
            inEdit:false,
            editValue:''
        });
    }
    editDone(ev){
        ev.stopPropagation();
        ev.preventDefault();
        let {editValue}=this.state;
        let {userInfo:{user_id},updateUserIntro}=this.props;
        $.post(`${cfg.url}/editIntro`,{user_intro:editValue,user_id})
        .done(({code})=>{
            if(code===0){
                this.setState({
                    inEdit:false
                })
                updateUserIntro(editValue);
            }
        })
    }
    render(){
        let {notebooks,userInfo,notebookClick,isMe}=this.props;
        let {editMe,editContent,cancelEdit,editDone}=this;
        let {inEdit,editValue}=this.state;
        notebooks=notebooks.map((ele,index)=>{
            let {id:collection_id,collection_name}=ele;
            return (
                <div className="item" key={index}>
                    <i className="book icon"></i>
                    <div className="content" onClick={
                        ev=>{
                            notebookClick(collection_id,collection_name)
                        }
                    }>
                        {collection_name}
                    </div>
                </div>
            );
        });
        return(
            <div className={S.aside}>
                <div className="introduce">
                    <div className="title">
                        个人介绍
                        {
                            isMe
                                ?(
                                    <div className="ui button tiny basic right floated" onClick={editMe}>
                                        <i className="icon write"></i>
                                        编辑
                                    </div>
                                )
                                :null
                        }
                        <div className="ui divider hidden"></div>

                        {
                            inEdit?(
                                <form className="ui form" onSubmit={editDone}>
                                    <div className="field">
                                        <textarea value={editValue} onChange={editContent}></textarea>
                                    </div>
                                    <button className="ui positive button" type="submit">
                                        提交
                                    </button>
                                    <button
                                        className="ui negative button"
                                        type="submit"
                                        onClick={cancelEdit}
                                    >
                                        取消
                                    </button>
                                </form>
                            ):(
                                <p>{userInfo.user_intro}</p>
                            )
                        }

                    </div>
                </div>

                <div className="ui divider hidden"></div>
                <div className={S.volume}>
                    <div className={S.title}>
                        我的文章
                    </div>
                    <div className="ui list">
                        {notebooks}
                    </div>
                </div>
            </div>
        );
    }
}
