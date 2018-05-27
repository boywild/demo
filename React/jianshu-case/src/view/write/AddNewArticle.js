import React ,{Component} from 'react';
import cfg from 'config/config.json';

class AddNewArticle extends Component{
    constructor(){
        super();
        this.state={
            collection:[]
        }
    }
    componentDidMount(){
        let {user_id}=this.props.myInfo;
        $.post(`${cfg.url}/getCollection`,{user_id})
        .done(({code,data})=>{
            if(code===0){
                this.setState({
                    collection:data
                });
            }
        })
        $(this.refs.dropdown).dropdown();
    }
    render(){
        let {collection}=this.state;
        console.log(collection[0]);
        collection=collection.map(({collection_name,id},index)=>{
            return (
                <div className="item" key={index}>
                    {collection_name}
                </div>
            );
        })
        return(
            <div className="ui container">
                <header className="ui header dividing">
                    <h1>写文章</h1>
                </header>
                <form className="ui form">
                    <div className="field">
                        <input type="text" className="form-control" placeholder="标题" />
                    </div>
                    <div className="fields">
                        <div className="field five wide column required">
                            <div className="ui selection dropdown" id="writeArtical" ref="dropdown">
                                <input type="hidden" name="album" ref="cltInput" placeholder="标题" />
                                <div className="default text">选择一个专题</div>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                    {collection}
                                </div>
                            </div>
                        </div>
                        <div className="field eleven wide column">
                            <input type="text" placeholder="回车添加文集" />
                        </div>
                    </div>
                    <div className="field">
                        <textarea row="16" className="" placeholder="随便写点文字"></textarea>
                    </div>
                    <div className="field">
                        <button type="submit" className="ui button primary">保存</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNewArticle;
