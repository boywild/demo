import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'


const render = (App) => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};
render(App);