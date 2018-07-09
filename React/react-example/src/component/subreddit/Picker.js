import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    title: PropTypes.string,
    selectChange: PropTypes.func,
    options: PropTypes.array
};

function Picker({title,selectChange,options}) {
    return (
        <div className='reddit'>
            <h1 style={{ marginBottom: '15px' }}>{title}</h1>
            <select value={title} onChange={e => selectChange(e.target.value)}>
            {
                options.map((option)=>(
                    <option value={option} key={option}>{option}</option>
                ))
            }
            </select>
        </div>
    )
}

Picker.propTypes = propTypes;

export default Picker;
