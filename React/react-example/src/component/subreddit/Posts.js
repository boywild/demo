import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    posts: PropTypes.array
}

function Posts({ posts }) {
    return (
        <div className='list'>
            <ul>
                {
                    posts.map((item, index) => (
                        <li key={index}>>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

Posts.propTypes = propTypes

export default Posts
