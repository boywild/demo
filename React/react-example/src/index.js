import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import RootRouter from './router/rootRouter'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import rootReducer from './reducer/rootReducer'
import counterReducer from './reducer/counter'
import {composeWithDevTools} from 'redux-devtools-extension'



let store=createStore(
    counterReducer,
    composeWithDevTools()
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
