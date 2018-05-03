import React from 'react';
import PT from 'prop-types';
import connect from './Connect';


class Header extends React.Component{
    static contextTypes={
        store:PT.object
    }
    // componentWillMount(){
    //     let {store}=this.context;
    //     this._updateThemeColor();
    //     store.subscribe(()=>this._updateThemeColor());
    // }
    // _updateThemeColor(){
    //     let {store}=this.context;
    //     let state=store.getState();
    //     this.setState({
    //         themeColor:state.themeColor
    //     });
    // }

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
