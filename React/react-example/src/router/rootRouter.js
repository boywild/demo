/*
 * @Author: chentian 
 * @Date: 2018-06-24 14:39:54 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-07-18 20:35:32
 */

import React, { Component } from 'react'
import {
    Route, Link
} from 'react-router-dom'

import Home from '../view/home';
import Demo1 from '../view/demo1';
import Demo2 from '../view/demo2';
import Demo3 from '../view/demo3';
import Demo4 from '../view/demo4';

export default class RootRouter extends Component {

    render() {
        return (
            <div className='wrapper'>
                <Link to='/demo1'>counter</Link>
                <Link to='/demo2'>shopping-cart</Link>
                <Link to='/demo3'>todoList</Link>
                <Link to='/demo4'>reddit</Link>
                {/* <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} /> */}
                <Route exact path="/demo1" component={Demo1} />
                <Route exact path="/demo2" component={Demo2} />
                <Route exact path="/demo3" component={Demo3} />
                <Route exact path="/demo4" component={Demo4} />
            </div>
        )
    }
}
