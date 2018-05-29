            <div className={S.sign_panel}>
                {infoMsg}
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