import React from 'react';
import PT from 'prop-types';

// import {connect} from './React-redux';
import { connect } from 'react-redux'


class ThemeSwitch extends React.Component{
    static contextTypes={
        store:PT.object
    }
    handleSwitchColor(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color);
        }
    }
    render(){
        return(
            <div>
              <button
                  style={{color:this.props.themeColor}}
                  onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
              <button
                  style={{color:this.props.themeColor}}
                  onClick={this.handleSwitchColor.bind(this,'blue')}>Blue</button>
            </div>
        );
    }
}
const mapStateToProps=(state,props)=>{
    return {
        themeColor:state.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
ThemeSwitch=connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch);
export default ThemeSwitch;
