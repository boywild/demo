import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,Switch
} from 'react-router-dom'

import Frame from 'view/frame/Frame';

require('semantic/dist/semantic.min.css');
require('semantic/dist/semantic.min.js');

const Home = (props) => {
    return (
        <h1>Home Page</h1>
    )
}

ReactDOM.render(
    <Router>
        <Route path="/" component={Frame}></Route>
    </Router>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept();
}