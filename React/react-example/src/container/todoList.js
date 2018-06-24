/*
 * @Author: chentian 
 * @Date: 2018-06-24 16:14:25 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 19:02:51
 */

import { connect } from 'react-redux'
import { addList, toggleVisibility, visibilityFilter, setVisibilityFilter } from '../action/todoList'

import TodoList from '../component/TodoList'
const getVisibileList = (todoList, filter) => {
    switch (filter) {
        case visibilityFilter.SHOW_ALL:
            return todoList;
        case visibilityFilter.SHOW_ACTIVE:
            return todoList.filter((item) => {
                return !item.complete
            })
        case visibilityFilter.SHOW_COMPLETE:
            return todoList.filter((item) => {
                return item.complete
            });
        default:
            return todoList;
    }
}

const mapStateToProps = (state) => ({
    list: getVisibileList(state.todoList, state.filter)
})
const mapDispatchToState = (dispatch) => ({
    addList: (text) => (dispatch(addList(text))),
    toggleVisibility: (index) => (dispatch(toggleVisibility(index))),
    setVisibilityFilter: (filter) => (dispatch(setVisibilityFilter(filter)))
})

export default connect(mapStateToProps, mapDispatchToState)(TodoList)
