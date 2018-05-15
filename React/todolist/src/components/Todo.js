import React from 'react';
import PT from 'prop-types';


const Todo =({text,toggleTodo})=>(
    <li onClick={toggleTodo()}>{text}</li>
);
export default Todo;
