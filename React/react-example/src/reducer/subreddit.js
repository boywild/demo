/*
 * @Author: chentian 
 * @Date: 2018-06-24 22:16:22 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-07-05 23:43:41
 */
import { SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../action/subreddit'

export const selectedSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}
const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
}
export const postsBySubreddit = (state = {}, action) => {
    console.log(action.subreddit, action);
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            };
        default:
            return state;
    }
}