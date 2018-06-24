/*
 * @Author: chentian 
 * @Date: 2018-06-24 22:16:22 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-06-24 23:03:06
 */
import { SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../action/subreddit'

export function selecteSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}

export function posts(
    state = {
        isFecting: false,
        didInvalidate: false,
        item: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFecting: true,
                didInvalidate: false
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFecting: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}
export function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            });
        default:
            return state;
    }
}