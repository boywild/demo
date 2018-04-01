import EntryPanel from 'components/user/Panel';
import SignInPanel from 'components/user/SignInPanel';

export default class SingIn extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {signInAjax}=this.props;
        return(
            <EntryPanel>
                <SignInPanel {...{signInAjax}}/>
            </EntryPanel>
        );
    }

}
