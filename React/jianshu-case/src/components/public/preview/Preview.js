import React from 'react'
import PropTypes from 'prop-types'
import cfg from 'common/config.json'

import S from './style.scss'
const propTypes = {
    
}

function Preview(props) {
    let {
        article_title,
        collection_id,
        collection_name,
        createdAt,
        preview,
        user_id,
        viewer,
        user
    }=props;
    let {avatar,id,user_intro,user_name}=user;
    avatar=cfg.url+avatar;
    createdAt = new Date(createdAt).toLocaleString();
    return (
        <div className={`${S.note}`}>
        <div className="ui divider hidden"></div>
        <div className={`${S.content}`}>
            <div className={`${S.author}`}>
                <a className="avatar">
                    <img src={avatar} alt="" className="ui avatar image" />
                </a>
                <div className={`${S.name}`}>
                    <a href="#">{user_name}</a>
                    <span className="time">{createdAt}</span>
                </div>
            </div>
            <a className={S.title}>{article_title}</a>
            <p className={`${S.abstract}`}>
                {preview}
            </p>
            <div className={`${S.meta}`}>
                <a className={S.tag}>{collection_name}</a>
            </div>
        </div>
    </div>
    )
}

Preview.propTypes = propTypes

export default Preview;

