
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
    }

    render(){
        let {previewsName,myPagePreview,notebooks,location}=this.props;
        let {userInfo}=location.state;
        console.log(location);
        return(
            <div className="ui container grid">
                <div className="twelve wide column">
                    <AuthorInfo {...{userInfo}}/>
                    <div className="ui secondary pointing menu">
                        <span className="active item">
                            {previewsName}
                        </span>
                    </div>
                    <PreviewList {...{previews:myPagePreview}}/>
                </div>
                <div className="four wide column">
                    <Aside {...{notebooks,userInfo}}/>
                </div>
            </div>
        );
    }
}
MayPage.propTypes=propTypes;
