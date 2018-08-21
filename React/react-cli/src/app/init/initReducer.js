import createReducer from 'utils/createReducer';
const defaultState= () => ({
    isLogin: false,
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

const loginError=(state,action)=>({
    ...state,
	isLogin:false,
	user:action.payload
});

export default createReducer({
    APP_LOGIN_SUCCESS:login,
    APP_LOGIN_ERROR:loginError
});