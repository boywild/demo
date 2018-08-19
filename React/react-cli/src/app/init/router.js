import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ConnectedRouter} from 'connect-react-router';


const propTypes={
    history:PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};
const Router=({history,user})=>{
    return (
        <ConnectedRouter history={history}></ConnectedRoute>
    );
};

const mapStateToProps=state=>({
    user.state.app.user
})
const mapDispatchToProps=(state)=>{}
Router.propTypes=propTypes;
export default connect()(Router);