import React , {Component}from 'react';
import PT from 'prop-types';

import {connect} from './React-redux';

class ThemeSwitch extends Component {
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
                <button style={{color:this.props.themeColor}} onClick={this.handleSwitchColor.bind(this,'red')}>red</button>
                <button style={{color:this.props.themeColor}} onClick={this.handleSwitchColor.bind(this,'blue')}>blue</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        themeColor:state.themeColor
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSwitchColor: (color) => {
          dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    };
}
ThemeSwitch=connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch);
export default ThemeSwitch;
