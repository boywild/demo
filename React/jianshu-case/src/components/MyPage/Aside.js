import S from './style.scss';

export default class Aside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {notebooks,userInfo}=this.props;
        notebooks=notebooks.map((ele,index)=>{
            let {id:collection_id,collection_name}=ele;
            return (
                <div className="item" key={index}>
                    <i className="book icon"></i>
                    <div className="content">
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
                        <div className="ui divider hidden"></div>
                        <p>{userInfo.user_intro}</p>
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
