            <div className="ui container grid">
                <div className="column twelve wide">
                    <PreviewList {...{previews,initMyPage,collectionClick}}/>
                </div>
                <div className="column four wide">
                    <Recommend {...{authors,initMyPage,history}}/>
                </div>
            </div>