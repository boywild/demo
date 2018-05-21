import React from 'react';
import Todo from './Todo';

const TodoList=({todos,toggleTodo})=>(
    todos.map((todo,index)=>(
        <Todo key={todo.id} {...todo} onClick={()=> toggleTodo(todo.id)}/>
    ))
);

export default TodoList;
