import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import commentsReducer from './reducers/comments-reducer';
import CommentAppContainers from '../containers/CommentAppContainers';


var store=createStore(commentsReducer);
ReactDOM.render(<Provider store={store}><CommentAppContainers /></Provider>, document.getElementById('root'));
registerServiceWorker();
