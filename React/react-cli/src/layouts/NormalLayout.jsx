import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NormalLayout extends Component {
    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <div className="normalLayout">
                {this.props.children}
            </div>
        )
    }
}
