/*
 * @Author: chentian 
 * @Date: 2018-06-24 14:40:09 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-07-04 20:18:48
 */

import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'
import S from './style.css'


export default class Home extends Component {

    render() {
        return (
            <div className={`${S.navlink} item`}>
                <Link to='/demo1'>counter</Link>
                <Link to='/demo2'>shopping-cart</Link>
                <Link to='/demo3'>todoList</Link>
                <Link to='/demo4'>reddit</Link>
            </div>
        )
    }
}
