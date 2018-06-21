import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import S from './style.css';

export default class Home extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <Link to='/demo1'>counter</Link>
                <Link to='/demo2'>shopping-cart</Link>
            </div>
        )
    }
}
