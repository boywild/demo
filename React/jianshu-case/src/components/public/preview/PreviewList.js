import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Preview from './Preview'


export default class PreviewList extends Component {
    // static propTypes = {

    // }
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.previews.map((ele,i) => {
                        return (
                            <Preview key={i} {...ele}/>
                        )
                    })
                }
            </div>
        )
    }
}
