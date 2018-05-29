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