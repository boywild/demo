const ADD_TODO ='ADD_TODO';
const TOGGLE_TODO='TOGGLE_TODO';
const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER';

let nextTodoId = 0;

const VisibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}


const addTodo=(text)=>{
    return {type:ADD_TODO,id:nextTodoId++,text}
}
const toggleTodo=(index)=>{
    return {type:TOGGLE_TODO,index}
}
const setVisibilityFilter=(filter)=>{
    return {type:SET_VISIBILITY_FILTER,filter}
}


export {addTodo,toggleTodo,setVisibilityFilter,VisibilityFilters};
