import PreviewList from 'preview/PreviewList';
import Recommend from 'components/home/Recommend';
import cfg from 'config/config.json';
// import 'data/mockdata';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            previews:[],
            authors:[]
        }
        this.collectionClick=this.collectionClick.bind(this);
    }
    collectionClick(collection_id,collection_name,userInfo){
        let {history,initMyPage}=this.props;
        history.push('/my_page',{userInfo});
        initMyPage(userInfo.user_id,{collection_id},collection_name);
        console.log(collection_id,collection_name,userInfo);
    }
    componentDidMount(){
        $.post(`${cfg.url}/getPreview`)
           .done((res)=>{
               console.log(res);
               if(res.code===0){}
               this.setState({
                   previews:res.data
               });
           });
           $.post(`${cfg.url}/getAuthor`)
           .done((res)=>{
               console.log(res);
               if(res.code===0){
                   this.setState({
                       authors:res.data
                   });
               }
           });
    }
    render(){
        let {collectionClick}=this;
        let {previews,authors}=this.state;
        let {initMyPage,history}=this.props;
        return(
            <div className="ui container grid">
                <div className="column twelve wide">
                    <PreviewList {...{previews,initMyPage,collectionClick}}/>
                </div>
                <div className="column four wide">
                    <Recommend {...{authors,initMyPage,history}}/>
                </div>
            </div>
        );
    }

}
