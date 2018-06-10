import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import PropTypes from 'prop-types';
import Nav from 'components/public/nav/Nav';
import S from './style.scss';

import Home from '../home/Home'
import Write from '../write/Write'
import MyPage from '../mypage/MyPage'
import SignInPanle from '../signin/SignInPanle'
import SignUpPanle from '../signup/SignUpPanle'



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
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/sign_in' component={SignInPanle}></Route>
                <Route exact path='/sign_up' component={SignUpPanle}></Route>
                <Route exact path='/my_page' component={MyPage}></Route>
                <Route exact path='/write' component={Write}></Route>
            </div>
        )
    }
}
Frame.propTypes=propTypes;
export default Frame;
