import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CommentApp from './containers/CommentApp';
import commentsReducer from './reducer/comments-reducer';

const store=createStore(commentsReducer);
ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
