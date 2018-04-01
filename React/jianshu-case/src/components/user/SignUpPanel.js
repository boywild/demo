import Panel from './Panel';
import validator from 'util/validation.js';
import S from './style.scss';

export default class SignInPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            passw:'',
            cfpassw:'',
            nameError:false,
            passwError:false,
            cfPassError:false
        };
        this.validator=new validator();
        this.validator.addByValue('username',[
            {strategy:'isEmpty',errorMsg:'用户名不能为空'},
            {strategy:'maxLength:6',errorMsg:'用户名不能小于6位'},
            {strategy:'hasSpace',errorMsg:'用户名不能包含空格'}
        ]);
        this.validator.addByValue('passw',[
            {strategy:'isEmpty',errorMsg:'密码名不能为空'},
            {strategy:'maxLength:6',errorMsg:'密码名不能小于6位'},
            {strategy:'hasSpace',errorMsg:'密码不能包含空格'}
        ]);
        this.nameChange=this.nameChange.bind(this);
        this.passwChange=this.passwChange.bind(this);
        this.cfpasswChange=this.cfpasswChange.bind(this);
    }
    nameChange(ev){
        let {target}=ev;
        let msg=this.validator.valiOneByValue('username',target.value);
        this.setState({
            username:target.value,
            nameError:msg
        });
    }
    passwChange(ev){
        let {target}=ev;
        let {cfPassError}=this.state;
        let msg=this.validator.valiOneByValue('passw',target.value);
        this.setState({
            passw:target.value,
            passwError:msg
        });
        if(cfPassError){
            this.cfpasswChange();
        }
    }
    cfpasswChange(){
        let {cfPasswDom,passwDom}=this.refs;
        let msg= passwDom.value===cfPasswDom.value?'':'两次输入密码不一致';
        this.setState({
            cfpassw:cfPasswDom.value,
            cfPassError:msg
        });
    }
    render(){
        let {nameChange,passwChange,cfpasswChange}=this;
        let {username,passw,cfpassw,nameError,passwError,cfPassError}=this.state;
        let nameErrorMsg=nameError?(
            <p className={S.err}>{nameError}</p>
        ):'';
        let passwErrorMsg=passwError?(
            <p className={S.err}>{passwError}</p>
        ):'';
        let newpasswErrorMsg=cfPassError?(
            <p className={S.err}>{cfPassError}</p>
        ):'';
        return(
            <div className={S.sign_panel}>
                <form className="ui form">
                    <div className={`field ${nameError?'error':''}`}>
                        <input type="text" placeholder="用户名" value={username} onChange={nameChange} ref="nameDom" />
                    </div>
                    {nameErrorMsg}
                    <div className={`field ${nameError?'error':''}`}>
                        <input type="password" placeholder="密码" value={passw} onChange={passwChange} ref="passwDom" />
                    </div>
                    {passwErrorMsg}
                    <div className={`field ${cfPassError?'error':''}`}>
                        <input type="password" placeholder="确认密码" value={cfpassw} onChange={cfpasswChange} ref="cfPasswDom" />
                    </div>
                    {newpasswErrorMsg}
                    <div className="field">
                        <button type="submit" className="ui button fluid primary">注册</button>
                    </div>
                </form>
            </div>
        );
    }
}
