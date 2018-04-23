import EntryPanel from 'components/user/Panel';
import SignInPanel from 'components/user/SignInPanel';
let propTypes={
    signInAjax:PT.func,
    singInMsg:PT.object,
    clearLoginMsg:PT.func
};
export default class SingIn extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {signInAjax,singInMsg,clearLoginMsg}=this.props;
        return(
            <EntryPanel>
                <SignInPanel {...{signInAjax,singInMsg,clearLoginMsg}}/>
            </EntryPanel>
        );
    }

}
SingIn.propTypes=propTypes;
