import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Home from './views/Home';
import reducers from './reducers/reducers';

const store=createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
