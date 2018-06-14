import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panle from 'components/public/user/panle';
import SignUpPanle from 'components/public/user/SignUpPanle';

export default class SignUp extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <Panle>
                    <SignUpPanle />
                </Panle>
            </div>
        )
    }
}
