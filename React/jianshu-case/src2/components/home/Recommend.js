        <div className={S.recommend}>
            <div className={S.title}>
                <span>作者列表</span>
            </div>
            <div className="ui items">
                {
                    authors.map((ele,i)=>{
                        return(
                            <Author {...{user:ele,history,initMyPage}} key={i}/>
                        );
                    })
                }
            </div>
        </div>