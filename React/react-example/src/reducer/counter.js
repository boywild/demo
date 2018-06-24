/*
 * @Author: chentian 
 * @Date: 2018-06-24 14:39:42 
 * @Last Modified by:   chentian 
 * @Last Modified time: 2018-06-24 14:39:42 
 */

import { INCREMENT, DECREMENT } from '../action/counter';

const counterReducer = (state=0,action) => {
    switch (action.type) {
        case INCREMENT:
            return state+1;
        case DECREMENT:
            return state-1;
        default:
            return state;
    }
}

export default counterReducer;