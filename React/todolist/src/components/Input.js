import React from 'react';
import PT from 'prop-types';

const Input =({handleAddTodo})=>(
    <div>
        <form onSubmit={ ev=>{
                ev.preventDefault();
                handleAddTodo(input.value);
            }}>
            <input type="text" ref={node => input = node} />
            <button type="submit">submit</button>
        </form>
    </div>
)
export default Input;
