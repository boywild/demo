import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panle from 'components/public/user/panle';
import SignIn from 'components/public/user/SignIn';

export default class SignInPanle extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <Panle>
                    <SignIn />
                </Panle>
            </div>
        )
    }
}
