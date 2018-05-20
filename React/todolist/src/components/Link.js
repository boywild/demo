import React from 'react';


const Link =({active,children,filterTodo})=>(
    <button
        disabled={active ? true : false}
        onClick={filterTodo}
        style={{marginLeft:'4px'}}
        >
        {children}
    </button>
);

export default Link;
