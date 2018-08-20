import createReducer from 'utils/createReducer';
const defaultState= () => ({
    isLogin: false,
    loading:false,
    user: {},
    loginErrorMsg: '',
    notices: [],
    notification: {
		title: '',
		content: '',
    }
});

const login=(state,action)=>({
	...state,
	isLogin:true,
	user:action.payload
});
export default createReducer({
    APP_LOGIN_SUCCESS:login
});


// const initState={};
// export default (state=initState,action)=>{
// 	switch(action.type){
// 		case 'aaa':
// 			return {};
// 		default:
// 			return state;
// 	}
// }