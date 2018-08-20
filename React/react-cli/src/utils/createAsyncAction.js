
function createAsyncAction(name,callback,meta = {}){
    return (dispatch)=>{
        dispatch({
            type:`${name}_REQUEST`,
            meta
        });
        try{
            return callback().then((value)=>{
                const action={
                    type:`${name}_SUCCESS`,
                    meta,
                    payload:value
                };
                dispatch(action);
                return action;
            }).catch((err)=>{
                const action={
                    type:`${name}_ERROR`,
                    meta,
                    payload:err,
                    error: true
                };
                dispatch(action);
                return action;
            });
        }catch(e){
            const action={
                type:`${name}_ERROR`,
                meta,
                payload:err,
                error: true
            }；
            dispatch(action);
            return Promise.resolve(action);
        }
    }
}

// const createAsyncAction=(params)=>(dispatch)=>{
//     dispatch();
//     return new promise().then((data)=>{
//         dispatch();
//     });
// }

export default createAsyncAction;