import EntryPanel from 'components/user/Panel';
import SignUpPanel from 'components/user/SignUpPanel';
let propTypes={
    signUpAjax:PT.func,
    signUpMsg:PT.object,
    clearLoginMsg:PT.func
}
export default class SingUp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {signUpAjax,signUpMsg,clearLoginMsg}=this.props;
        return(
            <EntryPanel>
                <SignUpPanel {...{signUpAjax,signUpMsg,clearLoginMsg}}/>
            </EntryPanel>
        );
    }

}
SingUp.propTypes=propTypes;
