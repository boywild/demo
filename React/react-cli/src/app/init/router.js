import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import BasicLayout from 'layouts/BasicLayout';


const propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const Router = ({ history, user }) => (
    <ConnectedRouter history={history}>
        <BasicLayout />
    </ConnectedRouter>
);

const mapStateToProps = (state) => ({
    user: state.app.user
});

Router.propTypes = propTypes;
export default connect(mapStateToProps)(Router);
