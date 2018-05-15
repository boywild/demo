import React from 'react';
import PT from 'prop-types';

const Link=({children,filter})=>(
    <button type="submit" onClick={filter()}>
        {children}
    </button>
)
export default Link;
