import React,{Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AddTodo  from '../containers/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

// import {} from '../Actions/actions';
import reducers from '../Reducers/reducers';


const store =createStore(reducers);
const test=['1111','2222','3333']

class Home extends Component{
    render(){
        return(
            <Provider store={store}>
                <AddTodo />
                {/* <TodoList state={test} />
                <Footer /> */}
            </Provider>
        );
    }
}

export default Home;
