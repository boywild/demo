import get from 'lodash/get';
function createReducer(defaultState,handlers){
	if(typeof defaultState !=='function'){
		throw new Error('[createReducer] defaultState should be a function');
	}
	function reducer(state=defaultState(),action){
		if(!action||typeof action.type!=='string'){
			return state;
		}
		const handle=get(handlers,action.type);
		if(typeof handle ==='function'){
			return handle(state,action);
		}
		return state;
	}

	return reducer;
}

export default createReducer;