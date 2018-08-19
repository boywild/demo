import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App'
import {createApp,createStore,initClient} from './app';


const {store,history}=createStore(createBrowserHistory(),{});
const app=createApp(store,history);
initClient(store.dispatch);

ReactDOM.render(app,document.getElementById('app'));