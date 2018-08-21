import {compose,createStore,applyMiddleware,combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';
import {routerMiddleware,connectRouter} from 'connected-react-router';
import rootReducers from './rootReducers';

function createAppStore(history,preloadedState={}){
    let composeEnhancers = compose;
    if (typeof window !== 'undefined') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
    
    const middleWares=[
        routerMiddleware(history),
        reduxThunk
    ];
    const store=createStore(
        connectRouter(history)(combineReducers(rootReducers)),
        preloadedState,
        composeEnhancers(applyMiddleware(...middleWares))
    )
    return{
        store,
        history
    };
}

export default createAppStore;