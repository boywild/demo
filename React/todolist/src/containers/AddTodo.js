import React from 'react';
import {connect} from 'react-redux';



import {addTodo} from '../Actions/actions';



const AddTodo =({dispatch})=>{
    let input

    return (
        <div>
            <form onSubmit={ ev=>{
                    ev.preventDefault();
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}>
                <input ref={node => input = node} />
                <button type="submit">submit</button>
            </form>
        </div>
    );

}


export default connect()(AddTodo);
