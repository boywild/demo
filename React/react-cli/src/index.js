import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
// import { applyMiddleware, compose, createStore,combineReducers } from 'redux';
import { connectRouter, routerMiddleware,ConnectedRouter } from 'connected-react-router';

import rootReducer from 'app/init/rootReducers'
// import App from './App'


import CreateApp from './app/init/createApp';
import createStore from './app/init/createStore';
const {store,history}=createStore(createBrowserHistory(),{});
// const application=createApp(store,history);
// initClient(store.dispatch);
// console.log(application);
ReactDOM.render(<CreateApp store={store} history={history} />,window.document.getElementById('app'));


// const history = createBrowserHistory()
// const initialState={};
// const store = createStore(
//   connectRouter(history)(combineReducers(rootReducer)),
//   initialState,
//   compose(
//     applyMiddleware(
//       routerMiddleware(history)
//     ),
//   ),
// )

// ReactDOM.render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <div>
//           <Switch>
//             <Route exact path="/" render={() => (<div>Match</div>)} />
//             <Route render={() => (<div>Miss</div>)} />
//           </Switch>
//         </div>
//       </ConnectedRouter>
//   </Provider>
//   ,document.getElementById('app'));