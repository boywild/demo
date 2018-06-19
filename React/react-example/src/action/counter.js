/*
 * @Author: chentian 
 * @Date: 2018-06-19 17:56:31 
 * ----- 
 * @Modified By: chentian 
 * @Last Modified: 2018-06-19 17:56:31 
 */

const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';
// const INCREMENTIFODD='INCREMENTIFODD';
// const INCREMENTASYNC='INCREMENTASYNC';

/**
 * action creator
 */

const increment=(count)=>({type:INCREMENT,count})
const decrement=(count)=>({type:DECREMENT,count})
// const incrementIfOdd=(count)=>({type:INCREMENTIFODD,count})
// const incrementAsync=(count)=>({type:INCREMENTIFODD,count})
export {increment,decrement,INCREMENT,DECREMENT};
