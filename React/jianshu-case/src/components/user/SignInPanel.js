import React , {Component} from 'react';
import Panel from './Panel';
import Validator from 'util/validation.js';
import S from './style.scss';

let propTypes={
    signInAjax:PT.func
}
export default class SignInPanel extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            passw:'',
            nameError:false,
            passwError:false
        };
        this.nameChange=this.nameChange.bind(this);
        this.passwChange=this.passwChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.validator=new Validator();
        this.validator.addByValue('username',[
            {strategy:'isEmpty',errorMsg:'用户名不能为空'},
            {strategy:'maxLength:6',errorMsg:'用户名不能小于6位'},
            {strategy:'hasSpace',errorMsg:'用户名不能包含空格'},
        ]);
        this.validator.addByValue('passw',[
            {strategy:'isEmpty',errorMsg:'密码名不能为空'},
            {strategy:'maxLength:6',errorMsg:'密码名不能小于6位'},
            {strategy:'hasSpace',errorMsg:'密码不能包含空格'},
        ]);
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
        let msg=this.validator.valiOneByValue('passw',target.value);
        this.setState({
            passw:target.value,
            passwError:msg
        });
    }
    onSubmit(ev){
        ev.preventDefault();
        ev.stopPropagation();
        let {validator}=this;
        let {nameDom,passwDom}=this.refs;
        let nameError=this.validator.valiOneByValue('username',nameDom.value);
        let passwError=this.validator.valiOneByValue('passw',passwDom.value);
        this.setState({
            nameError,passwError
        });
        if(!nameError&&!passwError){
            this.props.signInAjax({
                username:nameDom.value,
                passw:passwDom.value
            });
        }



    }

    render(){
        let {nameChange,passwChange,onSubmit}=this;
        let {username,passw,nameError,passwError}=this.state;
        let nameErrorMsg=nameError?(
            <p className={S.err}>{nameError}</p>
        ):'';
        let passwErrorMsg=passwError?(
            <p className={S.err}>{passwError}</p>
        ):'';
        return(
            <div className={S.sign_panel}>
                <form className="ui form" onSubmit={onSubmit}>
                    <div className={`field ${nameError?'error':''}`}>
                        <input type="text" placeholder="用户名" value={username} onChange={nameChange} ref="nameDom" />
                    </div>
                    {nameErrorMsg}
                    <div className={`field ${passwError?'error':''}`}>
                        <input type="password" placeholder="密码" value={passw} onChange={passwChange} ref="passwDom" />
                    </div>
                    {passwErrorMsg}
                    <div className="field">
                        <button type="submit" className="ui button fluid primary">登陆</button>
                    </div>
                </form>
            </div>
        );
    }
}
