/*
 * @Author: chentian 
 * @Date: 2018-06-24 11:16:40 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 16:42:18
 */

import {connect} from 'react-redux'
import ShoppingCart from '../component/ShoppingCart'
import {addCart,updateCart,deleteCart} from '../action/shoppingCart'


const mapStateToProps=(state)=>({
    addList:state.cart.addList,
    updateList:state.cart.updateList,
    deleteList:state.cart.deleteList
})
const matDispatchToProps=(dispatch)=>({
    addToCart:(product, quantity, unitCost)=>(dispatch(addCart(product, quantity, unitCost))),
    updateToCart:(product, quantity, unitCost)=>(dispatch(updateCart( product, quantity, unitCost))),
    deleteFromCart:(product)=>(dispatch(deleteCart(product)))

})

export default connect(mapStateToProps,matDispatchToProps)(ShoppingCart)
