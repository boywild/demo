import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';

const AddTodo =({dispatch})=>(
    <form onSubmit={(ev)=>{
        ev.preventDefault();
        dispatch(addTodo(this.input.value))
        console.log(this.input.value);
        this.input.value='';
    }}>
        <input ref={(node)=>{this.input=node}} type="text" /><button>add</button>
    </form>
);



export default connect()(AddTodo);
