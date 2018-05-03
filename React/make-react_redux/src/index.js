import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Header from './Header';
import Content from './Content';
import PT from 'prop-types';

function createStore(reducer){
    let state=null;
    let listeners=[];

    let getState=()=>state;
    let subscribe=(listener)=> listeners.push(listener);
    let dispatch=(action)=>{
        state=reducer(state,action);
        listeners.forEach((listener)=>listener());
    }
    dispatch({});
    return {getState,dispatch,subscribe}
}

function themeReducer(state,action){
    if(!state){
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor:action.themeColor
            }
            break;
        default:
            return state;

    }
}

const store = createStore(themeReducer)

class Index extends Component{
    static childContextTypes={
        store:PT.object
    }
    getChildContext(){
        return {store};
    }
    render(){
        return(
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
