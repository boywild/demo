import React from 'react';
import PT from 'prop-types';
import Link from './Link';

const link=['asdf','111','222']
const Footer=()=>(
    <div>
        <span>Show:</span>
        {
            link.map((ele,index)=>(
                <Link key={index} children={ele} />
            ))
        }
    </div>
)
export default Footer;
