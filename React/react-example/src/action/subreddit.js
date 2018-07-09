/*
 * @Author: chentian 
 * @Date: 2018-06-24 22:04:51 
 * @Last Modified by: chentian
 * @Last Modified time: 2018-07-09 16:35:02
 */

/**
 * SELECT_SUBREDDIT 选择帖子类型
 * INVALIDATE_SUBREDDIT 刷新帖子
 * REQUEST_POSTS 请求数据
 * RECEIVE_POSTS 接收数据
 * https://www.reddit.com/r/reactjs.json
 */


export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/**
 * action creater
 */

export const selectSubreddit = (subreddit) => ({ type: SELECT_SUBREDDIT, subreddit });
export const invalidateSubreddit = (subreddit) => ({ type: INVALIDATE_SUBREDDIT, subreddit });
export const requestPosts = (subreddit) => ({
    type: REQUEST_POSTS,
    subreddit
});
export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    receivedAt: Date.now(),
    posts: json.data.children.map((child) => child.data)
});

const fetchPosts = (subreddit) => (dispatch) => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then((reponse) => reponse.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true;
    }
    if (posts.isFetching) {
        return false;
    }
    return posts.didInvalidate;
}

export const fetchPostsIfNeeded = (subreddit) => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
        return dispatch(fetchPosts(subreddit));
    }
}