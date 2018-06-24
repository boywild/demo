/*
 * @Author: chentian 
 * @Date: 2018-06-24 14:39:38 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 14:42:06
 */

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
