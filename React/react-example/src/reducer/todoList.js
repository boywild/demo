/*
 * @Author: chentian 
 * @Date: 2018-06-24 16:14:33 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 19:02:04
 */

import { ADD_LIST, TOGGLE_VISIBILITY,SET_VISIBILITY_FILTER } from "../action/todoList";
import { visibilityFilter } from '../action/todoList';

export const filterReducer=(state=visibilityFilter.SHOW_ALL,action)=>{
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;

    }
}

export const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_LIST:
            return [
                ...state,
                {
                    text: action.text,
                    complete: false
                }
            ]
        case TOGGLE_VISIBILITY:
            return state.map((item, index) => {
                if (index === action.index) {
                    return {
                        ...item,
                        complete: !item.complete
                    }
                }
                return item;
            })

        default:
            return state
    }
}
