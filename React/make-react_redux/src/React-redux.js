import React ,{Component} from 'react';
import PT from 'prop-types';

const connect= (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component{
        static contextTypes={
            store:PT.object
        }
        constructor(){
            super();
            this.state={
                allProps:{}
            }
        }
        componentWillMount(){
            const { store } = this.context
            this._updateThemeColor();
            store.subscribe(() => this._updateThemeColor());
        }
        _updateThemeColor(){
            let { store } = this.context;
            let stateProps = mapStateToProps
            ?mapStateToProps(store.getState(),this.props)
            :{};
            let dispatchProps=mapDispatchToProps
            ?mapDispatchToProps(store.dispatch,this.props)
            :{};
            this.setState({
                allProps:{
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            });
        }
        render(){
            return(
                <WrappedComponent {...this.state.allProps} />
            );
        }
    }
    return Connect;
}




class Provider extends Component{
    static propTypes = {
        store: PT.object,
        children: PT.any
    }
    static childContextTypes={
        store:PT.object
    }
    getChildContext(){
        return {
            store:this.props.store
        };
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
export {connect,Provider};
