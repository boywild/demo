import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter,VisibilityFilter} from '../actions/actions';
import Link from '../components/Link';


const FilterLink =({children,onClick})=>(
    <button onClick={onClick}>{children}</button>
);

const mapStateToProps=(state,ownProps)=>({
    active:ownProps.filter===state.visibilityFilter
});
const mapDispatchToProps=(dispatch,ownProps)=>({
    filterTodo:()=>{
        dispatch(setVisibilityFilter(ownProps.filters));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Link);
