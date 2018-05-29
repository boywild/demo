
            <Preview {...{
                article_id,
                article_title,
                previewContent,
                user_id,
                user_name,
                createdAt,
                avatar,
                user_intro,
                initMyPage
            }} key={i}>
                {
                    collection_id
                        ?(
                            <Link to=""
                                onClick={
                                    ev=>{
                                        ev.stopPropagation();
                                        ev.preventDefault();
                                        collectionClick&&collectionClick(collection_id,collection_name,{
                                            user_id,user_name,avatar
                                        });
                                    }
                                }
                                className={`${S.tag}`}>
                                {collection_name}
                            </Link>
                        )
                        :null
                }

            </Preview>
        <div>
            {previews}
        </div>