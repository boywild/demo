import PreviewList from 'preview/PreviewList';
import Recommend from 'components/home/Recommend';
import cfg from 'config/config.json';
import 'data/mockdata';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            previews:[],
            authors:[]
        }
    }
    componentDidMount(){
        $.ajax({
               type: 'get',
               url: '/get',
               dataType: 'json'
           }).done((resp)=>{
               console.log(resp);
               this.setState({
                   previews:resp.data
               });
           });
    }
    render(){
        let {previews,authors}=this.state;
        return(
            <div className="ui container grid">
                <div className="column twelve wide">
                    <PreviewList {...{previews}}/>
                </div>
                <div className="column four wide">
                    <Recommend/>
                </div>
            </div>
        );
    }

}
