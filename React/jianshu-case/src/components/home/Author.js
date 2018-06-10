import React from 'react'
import PropTypes from 'prop-types'
import cfg from 'common/config.json'


const propTypes = {
    
}

function Author(props) {
    let {user_name,avatar,user_intro,id}=props;
    console.warn(user_name);
    avatar=cfg.url+avatar;
    return (
        <div className="item">
        <a className="ui mini avatar image">
            <img src={avatar} alt="" />
        </a>
        <div className="content">
            <div className="header">
                {user_name}
            </div>
        </div>
    </div>
    )
}

Author.propTypes = propTypes

export default Author
