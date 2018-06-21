import {combineReducers} from 'redux'
import counterReducer from './counter'
const allReducers={
    counter:counterReducer
}

const rootReducer=combineReducers(allReducers)
export default rootReducer;

