import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default class Home extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <Link to='/demo1'>counter</Link>
            </div>
        )
    }
}
