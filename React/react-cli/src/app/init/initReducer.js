import createReducer from 'utils/createReducer';
const defaultState= () => ({
    isLogin: false,
    user: {},
    loginErrorMsg: '',
    notices: [],
    notification: {
      title: '',
      content: '',
    },
});

export default  createReducer({
    
});