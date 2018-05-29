        <div className="item">
            <Link to="/"
                onClick={
                    ev=>{
                        ev.stopPropagation();
                        ev.preventDefault();
                        history.push('/my_page',{userInfo:{
                            user_name,
                            user_intro,
                            avatar,
                            user_id
                        }});
                        initMyPage(user_id,{user_id},'所有文章');
                    }
                }
            className="ui mini avatar image">
                <img src={avatar} alt="" />
            </Link>
            <div className="content">
                <div className="header">
                    {user_name}
                </div>
            </div>
        </div>