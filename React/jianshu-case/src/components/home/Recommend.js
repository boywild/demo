import React from 'react'
import PropTypes from 'prop-types'
import Author from './Author'
import S from './style.scss';
const propTypes = {
    
}

function Recommend(props) {
    let {author}=props;
    return (
        <div className={S.recommend}>
        <div className={S.title}>
            <span>作者列表</span>
        </div>
        <div className="ui items">
            {
                author.map((ele, i) => {
                    return (
                        <Author key={i} {...ele}/>
                    );
                })
            }
        </div>
    </div>
    )
}

Recommend.propTypes = propTypes

export default Recommend
