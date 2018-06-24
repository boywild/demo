/*
 * @Author: chentian 
 * @Date: 2018-06-24 14:39:47 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 18:09:13
 */

import { combineReducers } from 'redux'
import counterReducer from './counter'
import shoppingCartReducer from './shoppingCart'
import { todoListReducer, filterReducer } from './todoList'


const allReducers = {
    counter: counterReducer,
    cart: shoppingCartReducer,
    todoList: todoListReducer,
    filter: filterReducer
}

const rootReducer = combineReducers(allReducers)
export default rootReducer;

