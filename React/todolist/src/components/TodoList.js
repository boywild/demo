import React ,{Component} from 'react';
import PT from 'prop-types';

import Todo from './Todo';

const propTypes={
    todos:PT.arrayOf(
        PT.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    onTodoClick:PT.func.isRequired
}

const TodoList=({todos,onTodoClick})=>{
    todos.map((todo,index)=>{
        return <Todo key={index} {...todo} onClick={()=>onTodoClick(index)} />
    })
}

TodoList.propTypes=propTypes;
export default TodoList
