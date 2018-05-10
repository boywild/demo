const INIT_COMMENTS='INIT_COMMENTS';
const ADD_COMMENT='ADD_COMMENT';
const DELETE_COMMENT='DELETE_COMMENT';

export default function (state,action) {
    if(!state){
        state={
            comments:[]
        }
    }
    switch (action.type) {
        case INIT_COMMENTS:
            return {comments:action.comments}
        case ADD_COMMENT:
            return {
                comments:[
                    ...state,
                    action.comments
                ]
            }
        case DELETE_COMMENT:
            return {
                comments:[
                    ...state.comments.slice(0,action.commentIndex),
                    ...state.comments.slice(action.commentIndex+1)
                ]
            }
        default:
            return state;
    }
}

const initComments=(comment)=>{
    return {type:'INIT_COMMENTS',comment}
}
const addComment=(comment)=>{
    return {type:'ADD_COMMENT',comment}
}
const deleteComment=(comment)=>{
    return {type:'DELETE_COMMENT',comment}
}
