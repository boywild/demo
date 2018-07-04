/*
 * @Author: chentian 
 * @Date: 2018-06-24 22:04:51 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-07-04 20:43:58
 */

/**
 * SELECT_SUBREDDIT 选择帖子类型
 * INVALIDATE_SUBREDDIT 刷新帖子
 * REQUEST_POSTS 请求数据
 * RECEIVE_POSTS 接收数据
 */

import fetch from 'cross-fetch'


export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/**
 * action creater
 */
export function selectSubreddit(subreddit) {
    return { type: SELECT_SUBREDDIT, subreddit };
}
export function invalidateSubreddit(subreddit) {
    return { type: INVALIDATE_SUBREDDIT, subreddit }
}
export function requestPost(subreddit) {
    return { type: REQUEST_POSTS, subreddit }
}
export function receivePost(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receiveAt: Date.now()
    }
}

export function fetchPosts(subreddit) {
    return function (dispatch) {
        dispatch(requestPost(subreddit));
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receivePost(subreddit, json)))
    }
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit(subreddit);
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit))
        } else {
            return Promise.resolve()
        }
    }
}