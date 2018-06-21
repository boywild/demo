import { ADD_CART, UPDATE_CART, DELETE_CART } from '../action/shoppingCart'

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
                    state.cart.map((item,index)=>{
                        if(item.product===action.payload.product){
                            return action.payload
                        }
                        return item;
                    })
                ]
            };
        case DELETE_CART:
            return {
                ...state
            };
        default:
            return state;
    }
}
export default shoppingCartReducer;