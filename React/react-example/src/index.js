import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router
} from 'react-router-dom'
import RootRouter from './router/rootRouter'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger();

let store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ))
)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootRouter />
        </Router>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
