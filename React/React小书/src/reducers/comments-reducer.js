const INIT_COMMENTS='INIT_COMMENTS';
const ADD_COMMENTS='ADD_COMMENTS';
const DELETE_COMMENTS='DELETE_COMMENTS';

function (state,action){
    if(!state){
        state = comments:[]
    }
    switch (action.type) {
        case 'INIT_COMMENTS':
            comments:action.comments
            break;
        case 'ADD_COMMENTS':
            comments:[...state,action.comments]
            break;
        case 'DELETE_COMMENTS':
            comments:[
                ...state.slice(0,action.commentIndex),
                ...state.slice(action.commentIndex+1)
            ]
            break;
        default:

    }
}
