import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShoppingCartContainer from '../container/shoppingCart';


export default class Demo2 extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <ShoppingCartContainer />
            </div>
        )
    }
}
