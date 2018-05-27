
import PreviewList from 'preview/PreviewList';
import AuthorInfo from 'components/MyPage/AuthorInfo';
import Aside from 'components/MyPage/Aside';

let propTypes={
    previewsName:PT.string,
    myPagePreview:PT.array,
    notebooks:PT.array
}
export default class MayPage extends React.Component{
    constructor(props) {
        super(props);
        this.collectionClick=this.collectionClick.bind(this);
        this.notebookClick=this.notebookClick.bind(this);
        this.state={
            isMe:false
        }
    }
    collectionClick(collection_id,collection_name,userInfo){
        console.log(collection_id,collection_name);
        this.props.getPreview({collection_id},collection_name);
    }
    notebookClick(collection_id,collection_name){
        this.props.getPreview({collection_id},collection_name);
    }
    render(){
        let {previewsName,myPagePreview,notebooks,location,initMyPage,history,myInfo,updateUserIntro}=this.props;
        let {collectionClick,notebookClick}=this;
        let {isMe}=this.state;
        let {userInfo}=location.state;
        console.log(location);
        if(myInfo){
            this.state={
                isMe:myInfo.user_id===userInfo.user_id
            }
            userInfo=myInfo;
        }
        return(
            <div className="ui container grid">
                <div className="twelve wide column">
                    <AuthorInfo {...{userInfo,history,initMyPage}}/>
                    <div className="ui secondary pointing menu">
                        <span className="active item">
                            {previewsName}
                        </span>
                    </div>
                    <PreviewList {...{previews:myPagePreview,collectionClick,initMyPage}}/>
                </div>
                <div className="four wide column">
                    <Aside {...{notebooks,userInfo,notebookClick,isMe,updateUserIntro}}/>
                </div>
            </div>
        );
    }
}
MayPage.propTypes=propTypes;
