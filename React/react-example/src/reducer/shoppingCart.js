/*
 * @Author: chentian 
 * @Date: 2018-06-24 11:16:44 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 16:48:40
 */

import { ADD_CART, UPDATE_CART, DELETE_CART } from '../action/shoppingCart'


const initialState = {
    cart: [],
    addList:[
        {},
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },{
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        },{
            product: 'Coffee 500gm',
            quantity: 1,
            unitCost: 250
        },{
            product: 'Flour 1kg',
            quantity: 2,
            unitCost: 110
        },{
            product: 'Juice 2L',
            quantity: 1,
            unitCost: 250
        }
    ],
    updateList:[
        {},
        {
            product: 'milk 500ml',
            quantity: 5,
            unitCost: 110
        },{
            product: 'Coffee 500gm',
            quantity: 11,
            unitCost: 150
        }
    ],
    deleteList:[
        {},
        {
            product: 'Flour 1kg',
            quantity: 2,
            unitCost: 110
        }
    ]
}
const shoppingCartReducer = function (state = initialState, action) {
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
            };
        case UPDATE_CART:
            return {
                ...state,
                cart:[
                    state.cart.forEach((item,index)=>{
                        if(item.product===action.payload.product){
                            return action.payload
                        }
                        return item;
                    })
                ]
            };
        case DELETE_CART:
            return {
                ...state,
                cart:[
                    state.cart.forEach((item,index)=>{
                        if(item.product!==action.payload.product){
                            return item;
                        }
                    })
                ]
            };
        default:
            return state;
    }
}
export default shoppingCartReducer;