import React from 'react';
import {connect} from 'react-redux';

import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions/actions';
import {VisibilityFilter} from '../actions/actions';



const getVisibleTodos=(todos,filter)=>{
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter((todo)=> !todo.completed)
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter((todo)=> todo.completed)
        default:
            throw new Error('Unknown filter: ' + filter);

    }
}

const mapStateToProps=(state)=>({
    todos:getVisibleTodos(state.todos,state.visibilityFilter)
});
const mapDispatchToProps=(dispatch)=>({
    toggleTodo:(index)=>(
        dispatch(toggleTodo(index))
    )
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
