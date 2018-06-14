import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panle from 'components/public/user/panle';
import SignInPanle from 'components/public/user/SignInPanle';

export default class SignIn extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <Panle>
                    <SignInPanle />
                </Panle>
            </div>
        )
    }
}
