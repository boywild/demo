import React from 'react';
import PT from 'prop-types';


class ThemeSwitch extends React.Component{
    static contextTypes={
        store:PT.object
    }
    componentWillMount(){
        let {store}=this.context;
        this._updateThemeColor();
        store.subscribe(() => this._updateThemeColor());
    }
    _updateThemeColor(){
        let {store}=this.context;
        let state=store.getState();
        console.log(state);
        this.setState({ themeColor: state.themeColor })
    }
    handleSwitchColor(color){
        console.log(color);
        let {store}=this.context;
        store.dispatch({
            type:'CHANGE_COLOR',
            themeColor:color
        });
    }
    render(){
        return(
            <div>
              <button
                  style={{color:this.state.themeColor}}
                  onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
              <button
                  style={{color:this.state.themeColor}}
                  onClick={this.handleSwitchColor.bind(this,'blue')}>Blue</button>
            </div>
        );
    }
}
export default ThemeSwitch;
