import React from 'react';
import Todo from './Todo';

const TodoList=({todos,togogleTodo})=>(
    todos.map((todo,index)=>(
        <Todo key={index} {...todo} onClick={()=> togogleTodo(index)}/>
    ))
);

export default TodoList;
