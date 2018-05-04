import React , {Component}from 'react';
import PT from 'prop-types';

class ThemeSwitch extends Component {
    static contextTypes={
        store:PT.object
    }
    constructor(){
        super();
        this.state = { themeColor: '' }
    }

    componentWillMount(){
        const { store } = this.context
        this._updateThemeColor();
        store.subscribe(() => this._updateThemeColor())
    }
    _updateThemeColor(){
        let { store } = this.context;
        let state = store.getState();
        this.setState({
            themeColor: state.themeColor
        })
    }
    handleSwitchColor(color){
        let {store}=this.context;
        store.dispatch({type:'CHANGE_COLOR',themeColor:color});
    }
    render(){
        return(
            <div>
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor(this,'red')}>red</button>
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor(this,'blue')}>blue</button>
            </div>
        );
    }
}

export default ThemeSwitch;
