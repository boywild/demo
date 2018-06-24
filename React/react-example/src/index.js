import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router
} from 'react-router-dom'
import RootRouter from './router/rootRouter'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import rootReducer from './reducer/rootReducer'
// import counterReducer from './reducer/counter'
import rootReducer from './reducer/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'



let store=createStore(
    rootReducer,
    composeWithDevTools()
)
store.subscribe(()=>{
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
