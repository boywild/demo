import React from 'react';
import PT from 'prop-types';
// import {connect} from './React-redux';
import { connect } from 'react-redux'


class Header extends React.Component{
    static contextTypes={
        store:PT.object
    }
    render(){
        return(
            <h1 style={{color:this.props.themeColor}}>React.js 小书</h1>
        );
    }
}

const mapStateToProps=(state,props)=>{
    return {
        themeColor:state.themeColor
    }
}
Header=connect(mapStateToProps)(Header);
export default Header;
