const INIT_COMMENTS='INIT_COMMENTS';
const ADD_COMMENTS='ADD_COMMENTS';
const DELETE_COMMENTS='DELETE_COMMENTS';

export default function(state,action){
    if(!state){
        state = {comments:[]}
    }
    switch (action.type) {
        case 'INIT_COMMENTS':
            return {comments:action.comments}
        case 'ADD_COMMENTS':
            return {
                comments:[...state,action.comments]
            }
        case 'DELETE_COMMENTS':
            return {
                comments:[
                ...state.slice(0,action.commentIndex),
                ...state.slice(action.commentIndex+1)
                ]
            }
        default:
        return state;

    }
}

export const initComments=(comments)=>{
    return{type:'INIT_COMMENTS',comments};
}
export const addComments=(comments)=>{
    return{type:'ADD_COMMENTS',comments};
}
export const deleteComments=(commentsIndex)=>{
    return{type:'DELETE_COMMENTS',commentsIndex};
}
