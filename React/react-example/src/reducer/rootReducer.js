import {combineReducers} from 'redux'
import counterReducer from './counter'
import shoppingCartReducer from './shoppingCart'


const allReducers={
    counter:counterReducer,
    cart:shoppingCartReducer
}

const rootReducer=combineReducers(allReducers)
export default rootReducer;

