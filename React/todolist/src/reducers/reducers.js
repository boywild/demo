import {combineReducers} from 'redux';
import {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER,VisibilityFilter} from '../actions/actions';

const todos=(state=[],action)=>{
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.todos.map((todo,index)=>{
                if(index===action.index){
                    return {
                        ...todo,
                        completed:!todo.completed
                    }
                }
                return todo;
            })
        default:
        return state;

    }
}

export const visibilityFilter=(state=VisibilityFilter.SHOW_ALL,action)=>{
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            console.log(action);
            return action.filter;
        default:
            return state;

    }
}

export default combineReducers({
    todos,
    visibilityFilter
})
