import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    options: PropTypes.array,
    onchange: PropTypes.func
}

function componentName({ options, title, onchange }) {
    return (
        <span>
            <h1>{title}</h1>
            <select onChange={onchange}>
                {
                    options.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))
                }
            </select>
        </span>
    )
}

componentName.propTypes = propTypes

export default componentName
