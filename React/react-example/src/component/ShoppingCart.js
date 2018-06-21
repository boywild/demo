import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ShoppingCart extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <pre>
                {
                    `
                    {
                        product: 'bread 700g',
                        quantity: 2,
                        unitCost: 90,
                        type:ADD
                    },{
                        product: 'milk 500ml',
                        quantity: 1,
                        unitCost: 47,
                        type:ADD
                    },{
                        product: 'Coffee 500gm',
                        quantity: 1,
                        unitCost: 250,
                        type:ADD
                    },{
                        product: 'Flour 1kg',
                        quantity: 2,
                        unitCost: 110,
                        type:ADD
                    },{
                        product: 'Juice 2L',
                        quantity: 1,
                        unitCost: 250,
                        type:ADD
                    },{
                        product: 'milk 500ml',
                        quantity: 5,
                        unitCost: 110
                        type:UPDATE
                    },{
                        product: 'Coffee 500gm',
                        quantity: 11,
                        unitCost: 150,
                        type:UPDATE
                    }
                    `
                }
                </pre><br/>
                <label>product:</label><input type="text" /><br/>
                <label>quantity:</label><input type="number" /><br/>
                <label>unitCost:</label><input type="number" /><br/>
                <button>add</button>
                <button>update</button>
                <button>delete</button>                
            </div>
        )
    }
}
