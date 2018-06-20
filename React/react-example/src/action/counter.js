/*
 * @Author: chentian 
 * @Date: 2018-06-19 17:56:31 
 * ----- 
 * @Modified By: chentian 
 * @Last Modified: 2018-06-19 17:56:31 
 */

const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';

/**
 * action creator
 */

const increment=(count)=>({type:INCREMENT,count})
const decrement=(count)=>({type:DECREMENT,count})

export {increment,decrement,INCREMENT,DECREMENT};
