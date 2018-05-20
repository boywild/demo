import React from 'react';

import {VisibilityFilter} from '../actions/actions';
import FilterLink from '../containers/FilterLink';


const Footer =()=>(
    <div>
        <span>Show:</span>
        <FilterLink filters={VisibilityFilter.SHOW_ALL}>all</FilterLink>
        <FilterLink filters={VisibilityFilter.SHOW_ACTIVE}>active</FilterLink>
        <FilterLink filters={VisibilityFilter.SHOW_COMPLETED}>completed</FilterLink>
    </div>
);

export default Footer;
