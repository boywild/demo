/*
 * @Author: chentian 
 * @Date: 2018-06-24 11:16:34 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 14:33:23
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ShoppingCart extends Component {
    static propTypes = {
        addList:PropTypes.array,
        updateList:PropTypes.array,
        deleteList:PropTypes.array
    }
    constructor(){
        super();
        this.addChange=this.addChange.bind(this);
        this.updateChange=this.updateChange.bind(this);
        this.deleteChange=this.deleteChange.bind(this);
    }
    addChange(event){
        const addObj=this.props.addList.filter((item,index)=>{
            return item.product===event.target.value;
        });
        const {product, quantity, unitCost}={...addObj[0]};
        this.props.addToCart(product, quantity, unitCost)
    }
    updateChange(event){
        const updateObj=this.props.updateList.filter((item,index)=>{
            return item.product===event.target.value;
        });
        const {product, quantity, unitCost}={...updateObj[0]};
        this.props.updateToCart(product, quantity, unitCost)
    }
    deleteChange(event){
        const deleteObj=this.props.deleteList.filter((item,index)=>{
            return item.product===event.target.value;
        });
        const {product}={...deleteObj[0]};
        this.props.deleteFromCart(product)
    }
    render() {
        return (
            <div>
                <label>
                    <button>add</button>
                    <select onChange={this.addChange}>
                        {
                            this.props.addList.map((item,index)=>{
                                return (<option key={index}>{item.product}</option>)
                            })
                        }
                    </select>
                </label><br/>
                <label>
                    <button>update</button>
                    <select onChange={this.updateChange}>
                        {
                            this.props.updateList.map((item,index)=>{
                                return (<option key={index}>{item.product}</option>)
                            })
                        }
                    </select>
                </label><br/>
                <label>
                    <button>delete</button>
                    <select onChange={this.deleteChange}>
                        {
                            this.props.deleteList.map((item,index)=>{
                                return (<option key={index}>{item.product}</option>)
                            })
                        }
                    </select>
                </label>              
            </div>
        )
    }
}
