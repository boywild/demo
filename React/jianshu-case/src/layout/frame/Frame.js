import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from 'layout/nav/Nav';
import S from './style.scss';


let propTypes = {
    test:PropTypes.func
}
class Frame extends Component {

    constructor(props, context) {
        super(props, context)
        
    }
    
    render() {
        return (
            <div className={S.layout}>
                <Nav />
            </div>
        )
    }
}
Frame.propTypes=propTypes;
export default Frame;
