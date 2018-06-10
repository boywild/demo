import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panle from 'components/public/user/panle';
import SignUp from 'components/public/user/SignUp';

export default class SignUpPanle extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <Panle>
                    <SignUp />
                </Panle>
            </div>
        )
    }
}
