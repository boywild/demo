import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';


const propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};
const CustomRouter = ({ history, user }) => (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route exact path="/" render={() => (<div>Match</div>)} />
            </Switch>
        </div>
    </ConnectedRouter>
);


const mapStateToProps = state => ({
    user: state.app.user
});
CustomRouter.propTypes = propTypes;
export default connect(mapStateToProps)(CustomRouter);