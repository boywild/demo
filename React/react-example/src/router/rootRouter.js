/*
 * @Author: chentian 
 * @Date: 2018-06-24 14:39:54 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 18:05:20
 */

import React, { Component } from 'react'
import {
    Route
} from 'react-router-dom'

import Home from '../view/home';
import Demo1 from '../view/demo1';
import Demo2 from '../view/demo2';
import Demo3 from '../view/demo3';

export default class RootRouter extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/demo1" component={Demo1}></Route>
                <Route exact path="/demo2" component={Demo2}></Route>
                <Route exact path="/demo3" component={Demo3}></Route>
            </div>
        )
    }
}
