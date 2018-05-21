const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';

const increment=(count)=>({type:INCREMENT,count});
const decrement=(count)=>({type:DECREMENT,count});

export {INCREMENT,DECREMENT,increment,decrement};
