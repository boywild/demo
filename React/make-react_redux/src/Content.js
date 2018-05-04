import React from 'react';
import PT from 'prop-types';

import ThemeSwitch from './ThemeSwitch';
import { connect } from 'react-redux'


class Content extends React.Component{
    static contextTypes={
        store:PT.object
    }

    render(){
        return(
            <div>
              <p style={{color:this.props.themeColor}}>React.js 小书内容</p>
              <ThemeSwitch />
            </div>
        );
    }
}
const mapStateToProps=(state,props)=>{
    return {
        themeColor:state.themeColor
    }
}
Content=connect(mapStateToProps)(Content);
export default Content;
