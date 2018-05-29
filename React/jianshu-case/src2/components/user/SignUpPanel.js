            <div className={S.sign_panel}>
                {resInfo}
                <form className="ui form" onSubmit={onSubmit}>
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