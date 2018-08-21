import React from 'react';
import {Provider} from 'redux';
import CustomRouter from './router';

const createApp=(store,history)=>{
    return(
        <Provider store={store}>
            <CustomRouter history={history}></CustomRouter>
        </Provider>
    );
}
export default createApp;