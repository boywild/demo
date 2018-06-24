/*
 * @Author: chentian 
 * @Date: 2018-06-24 16:14:15 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 19:05:10
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    static propTypes = {
        list: PropTypes.array,
        addList: PropTypes.func,
        toggleVisibility: PropTypes.func,
        setVisibilityFilter: PropTypes.func
    }

    render() {
        return (
            <div>
                <div><input type="text" ref={(node) => this.inp = node} /><button onClick={
                    e => {
                        this.props.addList(this.inp.value)
                        this.inp.value='';
                    }
                }>add</button></div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (<li style={{ textDecoration: item.complete ? 'line-through' : 'none' }} key={index} onClick={e => this.props.toggleVisibility(index)}>{item.text}</li>)
                        })
                    }
                </ul>
                <div>
                    show:
                    <button onClick={e => this.props.setVisibilityFilter('SHOW_ALL')}>all</button>
                    <button onClick={e => this.props.setVisibilityFilter('SHOW_ACTIVE')}>active</button>
                    <button onClick={e => this.props.setVisibilityFilter('SHOW_COMPLETE')}>complete</button>
                </div>
            </div>
        )
    }
}
