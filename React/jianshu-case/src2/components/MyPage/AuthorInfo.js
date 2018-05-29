        <div className={S.author_info}>
            <Link to="/my_page" onClick={
                ev=>{
                    ev.stopPropagation();
                    ev.preventDefault();
                    console.log(111111111111111);
                    history.push('/my_page',{userInfo});
                    initMyPage(user_id,{user_id},'所有文章')
                }
            } className={S.avatar}><img src={userInfo.avatar} alt="" /></Link>
            <div className={S.title}>
                <Link to="/my_page" className={S.name}>{userInfo.user_name}</Link>
            </div>
        </div>