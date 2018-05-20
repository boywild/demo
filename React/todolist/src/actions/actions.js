const ADD_TODO='ADD_TODO';
const TOGGLE_TODO='TOGGLE_TODO';
const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER';


const VisibilityFilter={
    SHOW_ALL:'SHOW_ALL',
    SHOW_ACTIVE:'SHOW_ACTIVE',
    SHOW_COMPLETED:'SHOW_COMPLETED'
}

const addTodo=(text)=>(
    {type:ADD_TODO,text}
);
const toggleTodo=(index)=>(
    {type:TOGGLE_TODO,index}
);

const setVisibilityFilter=(filter)=>(
    {type:SET_VISIBILITY_FILTER,filter}
);

export {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER,VisibilityFilter,addTodo,toggleTodo,setVisibilityFilter};
