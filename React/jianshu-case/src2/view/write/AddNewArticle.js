            <div className="ui container">
                <header className="ui header dividing">
                    <h1>写文章</h1>
                </header>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input type="text"
                            className="form-control"
                            placeholder="标题"
                            value={titVal}
                            onChange={titleChange}
                        />
                    </div>
                    <div className="fields">
                        <div className="field five wide column required">
                            <div className="ui selection dropdown" id="writeArtical" ref="dropdown">
                                <input type="hidden" name="album" ref="cltIdInput" placeholder="标题" />
                                <div className="default text">选择一个专题</div>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                    {collection}
                                </div>
                            </div>
                        </div>
                        <div className="field eleven wide column">
                            <input type="text"
                                placeholder="回车添加文集"
                                value={cltVal}
                                onChange={cltChange}
                                onKeyDown={addCollection}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <textarea
                            placeholder="随便写点文字"
                            value={contentVal}
                            onChange={contentChange}
                            ></textarea>
                    </div>
                    <div className="field">
                        <button type="submit" className="ui button primary">保存</button>
                    </div>
                </form>
            </div>