import React from 'react';
import {connect} from 'react-redux';

import Counter from '../components/Counter';
import {increment,decrement} from '../actions/actions';

const mapStateToProps=(state=0)=>({
    value:state
})
const mapDispatchToProps=(dispatch)=>({
    onIncrement:(count)=>(
        dispatch(increment(count))
    ),
    onDecrement:(count)=>(
        dispatch(decrement(count))
    )
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
