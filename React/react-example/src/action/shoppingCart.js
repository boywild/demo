/*
 * @Author: chentian 
 * @Date: 2018-06-21 22:38:23 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 14:39:06
 */

export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

/**
 * action creater
 */

export const addCart = (product, quantity, unitCost) => ({
    type: ADD_CART,
    payload: {
        product, quantity, unitCost
    }
})
export const updateCart = (product, quantity, unitCost) => ({
    type: UPDATE_CART,
    payload: {
        product, quantity, unitCost
    }
})
export const deleteCart = (product) => ({
    type: DELETE_CART,
    payload: {
        product
    }
})

