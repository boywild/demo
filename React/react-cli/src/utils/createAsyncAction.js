function createAsyncAction(name,callback,meta={}){
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
                    type:`${name}_ERROE`,
                    meta,
                    payload:err,
                    error:true
                };
                dispatch(action);
                return action;
            });
        }catch(err){
            const action={
                type:`${name}_ERROE`,
                meta,
                payload:err,
                error:true
            };
            dispatch(action);
            return action;
        }
    }
}
export default createAsyncAction;