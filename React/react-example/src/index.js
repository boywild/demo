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
// import rootReducer from './reducer/rootReducer'
// import counterReducer from './reducer/counter'
import rootReducer from './reducer/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { selectSubreddit, fetchPosts } from './action/subreddit'

const loggerMiddleware = createLogger();

let store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ))
)
store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs'))
    .then(() => console.log(store.getState()))
store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootRouter />
        </Router>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
