import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4



import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore,combineReducers } from 'redux'
import { connectRouter, routerMiddleware,ConnectedRouter } from 'connected-react-router'


import ReactDOM from 'react-dom';
import rootReducer from 'app/init/rootReducers'

// import createBrowserHistory from 'history/createBrowserHistory';
// import App from './App'
// import {createApp,createStore,initClient} from './app/index';

// console.log(typeof );
// const {store,history}=createStore(createBrowserHistory(),{});
// const app=createApp(store,history);
// initClient(store.dispatch);
console.log(app);


const history = createBrowserHistory()
const initialState={};
const store = createStore(
  connectRouter(history)(combineReducers(rootReducer)), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
    ,document.getElementById('app'));