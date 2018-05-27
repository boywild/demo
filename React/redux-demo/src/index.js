import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import rootReducer from './reducer/cart-reducer';

import {addCart,updateCart,deleteCart} from './action/cart-action';

const store=createStore(rootReducer,composeWithDevTools());


store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(addCart('Coffee 500gm', 1, 250));
store.dispatch(addCart('Flour 1kg', 2, 110));
store.dispatch(addCart('Juice 2L', 1, 250));

store.dispatch(updateCart('Flour 1kg', 5, 110));
store.dispatch(deleteCart('Coffee 500gm'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
