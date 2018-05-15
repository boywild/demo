import {combineReducers} from 'redux';
import {VisibilityFilters} from '../Actions/actions';

function todos(state=[],action){
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        case 'TOGGLE_TODO':
            return state.map((todo,index)=>{
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

function visibilityFilter(state=VisibilityFilters.SHOW_ALL,action){
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;

    }
}

export default combineReducers({
    todos,
    visibilityFilter
});
