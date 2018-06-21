import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Counter from '../component/Counter'
import {increment,decrement} from '../action/counter'

const mapStateToProps=(state)=>({
    value:state.counter
})
const mapDispatchToProps=(dispatch)=>({
    onIncrement:(count)=>(
        dispatch(increment(count))
    ),
    onDecrement:(count)=>(
        dispatch(decrement(count))
    )
});
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
