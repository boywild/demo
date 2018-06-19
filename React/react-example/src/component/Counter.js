import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {

}

function Counter(props) {
    return (
        <div>
            <p>
                Clicked: {props.value} times
            <button onClick={props.onIncrement.bind(this)}>
                    +(onIncrement)
            </button>
                <button onClick={props.onDecrement.bind(this)}>
                    -(onDecrement)
            </button>
                <button>
                    Increment if odd(incrementIfOdd)
            </button>
                <button>
                    Increment async(incrementAsync)
            </button>
            </p>
        </div>
    )
}

Counter.propTypes = propTypes

export default Counter;

