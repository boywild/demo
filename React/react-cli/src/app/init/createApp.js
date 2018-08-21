import React from 'react';
import { Provider } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import CustomRouter from './router';

class CreateApp extends React.Component{
    render(){
        return(
            <Provider store={this.props.store}>
            <ConnectedRouter history={this.props.history}>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => (<div>Match</div>)} />
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
        );
    }
}
// const createApp = (store, history) => (
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <Switch>
//                     <Route exact path="/" render={() => (<div>Match</div>)} />
//                 </Switch>
//             </div>
//         </ConnectedRouter>
//     </Provider>
// );


export default createApp;
