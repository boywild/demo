import React ,{Component} from 'react';
import PT from 'prop-types';

const connect=(mapStateToProps)=>(WrappedComponent)=>{
    class Connect extends Component{
        static contextTypes={
            store:PT.object
        }
        componentWillMount(){
            let {store}=this.context;
            this._updateThemeColor();
            store.subscribe(()=>this._updateThemeColor());
        }
        _updateThemeColor(){
            let {store}=this.context;
            let stateProps=mapStateToProps(store.getState(),this.props);
            this.setState({
                allProps:{
                    ...stateProps,
                    ...this
                }
            });
        }
        render(){
            return <WrappedComponent {...this.state.allProps}/>
        }
    }

    return Connect;
}

export default connect;
