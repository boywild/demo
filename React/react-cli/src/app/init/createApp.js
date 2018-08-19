import React from 'react';
import {Provider} from 'redux';
import Router from './router';

const createApp=(store,history)=>{
    return(
        <Provider store={store}>
            <Router history={history}></Router>
        </Provider>
    );
}
export default createApp;