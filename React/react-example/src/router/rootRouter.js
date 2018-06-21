import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Home from '../view/home';
import Demo1 from '../view/demo1';
import Demo2 from '../view/demo2';

export default class RootRouter extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/demo1" component={Demo1}></Route>
                <Route exact path="/demo2" component={Demo2}></Route>
            </div>
        )
    }
}
