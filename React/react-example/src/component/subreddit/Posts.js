import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    posts: PropTypes.array
};

function Posts({ posts }) {
    return (
        <ul>
            {
                posts.map(item => (
                    <li key={item.title}>{item.title}</li>
                ))

            }

        </ul>
    )
}

Posts.propTypes = propTypes;

export default Posts;
