import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CounterContainer from '../container/counter';

export default class Demo1 extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <CounterContainer />
            </div>
        )
    }
}
