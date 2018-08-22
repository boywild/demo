import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
// import { MultiIntlProvider } from 'react-intl-context';
import { connect } from 'react-redux';
// import AclRouter from 'react-acl-router';
// import BasicLayout from 'layouts/BasicLayout';
// import NormalLayout from 'layouts/NormalLayout';
// import NotFound from 'views/notFound';
// import { messages, buildConfig } from '../config/buildConfig';
// import { authorizedRoutes, normalRoutes } from '../config/routes';

// const { locale } = buildConfig;

const propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const Router = ({ history, user }) => (
    <ConnectedRouter history={history}>
        <div>asd</div>
    </ConnectedRouter>
);

const mapStateToProps = (state) => ({
    user: state.app.user
});

Router.propTypes = propTypes;
export default connect(mapStateToProps)(Router);
