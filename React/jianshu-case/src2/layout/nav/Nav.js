        <div className={`ui fixed secondary pointing menu ${S.nav}`}>
            <div className="ui container">
                <Link to="/" className={`header item`}>Noodes</Link>
                <NavLink exact to="/" className={`item`}>首页</NavLink>
                <div className="menu right">
                    {navGroup}
                    <NavLink to="/write" className={`item`} activeClassName={'active'}>写文章</NavLink>
                </div>
            </div>
        </div>