import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import PT from 'prop-types';
import Header from './Header';
import Content from './Content';
import {Provider} from './React-redux';

function createStore(reducer){
    let state=null;
    let listeners=[];
    let subscribe=(listener) => listeners.push(listener);
    let getState=()=>state;
    let dispatch=(action)=>{
        state=reducer(state,action);
        listeners.forEach((listener)=>listener());
    }
    dispatch({});
    return {getState,subscribe,dispatch}
}

const themeReducer=(state,action)=>{
    if(!state){
        return {
            themeColor:'red'
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
let store = createStore(themeReducer);

class Index extends Component{
    render(){
        return(
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}> <Index /> </Provider>,
  document.getElementById('root'));
registerServiceWorker();
