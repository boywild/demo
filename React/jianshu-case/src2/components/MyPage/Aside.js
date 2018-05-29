
                <div className="item" key={index}>
                    <i className="book icon"></i>
                    <div className="content" onClick={
                        ev=>{
                            notebookClick(collection_id,collection_name)
                        }
                    }>
                        {collection_name}
                    </div>
                </div>
            <div className={S.aside}>
                <div className="introduce">
                    <div className="title">
                        个人介绍
                        {
                            isMe
                                ?(
                                    <div className="ui button tiny basic right floated" onClick={editMe}>
                                        <i className="icon write"></i>
                                        编辑
                                    </div>
                                )
                                :null
                        }
                        <div className="ui divider hidden"></div>

                        {
                            inEdit?(
                                <form className="ui form" onSubmit={editDone}>
                                    <div className="field">
                                        <textarea value={editValue} onChange={editContent}></textarea>
                                    </div>
                                    <button className="ui positive button" type="submit">
                                        提交
                                    </button>
                                    <button
                                        className="ui negative button"
                                        type="submit"
                                        onClick={cancelEdit}
                                    >
                                        取消
                                    </button>
                                </form>
                            ):(
                                <p>{userInfo.user_intro}</p>
                            )
                        }

                    </div>
                </div>

                <div className="ui divider hidden"></div>
                <div className={S.volume}>
                    <div className={S.title}>
                        我的文章
                    </div>
                    <div className="ui list">
                        {notebooks}
                    </div>
                </div>
            </div>
