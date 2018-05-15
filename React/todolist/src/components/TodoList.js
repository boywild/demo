import React from 'react';
import PT from 'prop-types';

import Todo from './Todo';



const TodoList =({state})=>(

    state.map((ele,index)=>(
        <Todo key={index} text={ele} />
    ))

);
export default TodoList;
