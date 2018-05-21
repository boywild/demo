import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import counterContainer from './containers/counterContainer';
import counter from './reducers/reducers';
import Home from './views/Home'

let store= createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
