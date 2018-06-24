/*
 * @Author: chentian 
 * @Date: 2018-06-24 14:40:09 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 15:37:30
 */

import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'
import S from './style.css'


export default class Home extends Component {

    render() {
        return (
            <div>
                <Link to='/demo1'>counter</Link>
                <Link to='/demo2'>shopping-cart</Link>
                <Link to='/demo3'>todoList</Link>
            </div>
        )
    }
}
