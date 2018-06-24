/*
 * @Author: chentian 
 * @Date: 2018-06-24 15:57:55 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 19:00:05
 */

export const ADD_LIST = 'ADD_LIST';
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const visibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETE: 'SHOW_COMPLETE'
}

/**
 * action creater
 */

export const addList = (text) => ({ type: ADD_LIST, text })
export const toggleVisibility = (index) => ({ type: TOGGLE_VISIBILITY, index })
export const setVisibilityFilter=(filter)=>({type:SET_VISIBILITY_FILTER,filter})