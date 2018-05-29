            <div className={S.layout}>
                <Nav {...{myInfo,loginOut,initMyPage,history}} />
                <Route exact path="/" render={
                    (props)=>(
                        <Home
                            {...{initMyPage,history}}
                            {...props}
                        />
                    )
                }/>
                <Route exact path="/sign_in" render={(props)=>(
                    myInfo?(
                        <Redirect to="/" />
                    ):(
                        <SignIn {...{signInAjax,singInMsg,clearLoginMsg}} />
                    )
                )}/>
                <Route exact path="/sign_up" render={
                    (props)=>(
                        myInfo?(
                            <Redirect to="/" />
                        ):(
                            <SignUp {...{signUpAjax,signUpMsg,clearLoginMsg}} />
                        )
                    )
                }/>
                <Route exact path="/my_page" render={
                    (props)=>(
                        props.location.state
                            ?(<MyPage
                                {...{previewsName,myPagePreview,notebooks,getPreview,initMyPage,history,myInfo,updateUserIntro}}
                                {...props}
                              />
                            ):(
                                <Redirect to="/" />
                            )

                    )
                }/>
                <Route path="/write" render={
                    (props)=>(
                        myInfo?(
                            <AddNewArticle {...{myInfo}} />
                        ):(
                            <Redirect to="/write_hint" />
                        )

                    )
                } />
                <Route path="/write_hint" render={
                    (props)=>(
                        <WriteHint {...{history}}/>
                    )
                } />
            </div>