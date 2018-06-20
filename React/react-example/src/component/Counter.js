import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props){
        super(props);
        this.incrementIfOdd=this.incrementIfOdd.bind(this);
        this.incrementAsync=this.incrementAsync.bind(this);
    }
    incrementIfOdd(){
        if(this.props.value%2!==0){
            this.props.onIncrement()
        }
    }
    incrementAsync(){
        if(this.props.value%2!==0){
            this.props.onDecrement()
        }
    }
    render() {
        return (
            <div>
            <p>
                Clicked: {this.props.value} times
            <button onClick={e => this.props.onIncrement()}>
                    +
            </button>
                <button onClick={e => this.props.onDecrement()}>
                    -
            </button>
                <button onClick={this.incrementIfOdd}>
                    Increment if odd(incrementIfOdd)
            </button>
                <button onClick={this.incrementAsync}>
                    Increment async(incrementAsync)
            </button>
            </p>
        </div>
        )
    }
}
Counter.propTypes={
    value:PropTypes.number,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired
};
export default Counter;
