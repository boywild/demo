import React , {Component} from 'react';
import PT from 'prop-types';

import {connect} from './React-redux';


class Header extends Component {
    static propTypes={
        themeColor: PT.string
    }
    render(){
        return(
            <h1 style={{color:this.props.themeColor}}>React.js 小书</h1>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        themeColor:state.themeColor
    }
}
Header=connect(mapStateToProps)(Header);
export default Header;
