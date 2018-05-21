import React,{Component} from 'react';
import PT from 'prop-types';

class Counter extends Component{
    static defaultProps={
        value:0
    }
    constructor(props){
        super(props);
        this.incrementIfOdd=this.incrementIfOdd.bind(this);
        this.incrementAsync=this.incrementAsync.bind(this);
    }
    incrementIfOdd(){
        if(this.props.value%2!==0){
            this.props.onIncrement();
        }
    }
    incrementAsync(){
        if(this.props.value%2!==0){
            this.props.onDecrement();
        }
    }
    render(){
        return(
            <p>
              Clicked: {this.props.value} times
              <button onClick={this.props.onIncrement}>
                +
              </button>
              <button onClick={this.props.onDecrement}>
                -
              </button>
              <button onClick={this.incrementIfOdd}>
                Increment if odd
              </button>
              <button onClick={this.incrementAsync}>
                Increment async
              </button>
            </p>
        )
    }
}
Counter.propTypes={
    value:PT.number,
    onIncrement:PT.func.isRequired,
    onDecrement:PT.func.isRequired
}
export default Counter;
