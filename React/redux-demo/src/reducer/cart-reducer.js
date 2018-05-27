import {combineReducers} from 'redux';

import {ADD_CART,UPDATE_CART,DELETE_CART,addCart,updateCart,deleteCart} from '../action/cart-action';

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}
const cartReducer=function(state=initialState,action){
    switch (action.type) {
        case ADD_CART:
            return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...action.payload
                        }
                    ]
                }
        case UPDATE_CART:
            return {
                ...state,
                cart:state.cart.map((item,index)=>{
                    if(item.product===action.payload.product){
                        return action.payload;
                    }
                    return item;
                })
            }
        case DELETE_CART:
            return {
                ...state,
                cart:state.cart.filter((item,index)=>{
                    if(item.product!==action.payload.product){
                        return item;
                    }
                })
            }
        default:
            return state;

    }
}
const productsReducer = function(state=[], action) {
  return state;
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
