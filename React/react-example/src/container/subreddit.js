import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded } from '../action/subreddit'
import Picker from '../component/subreddit/Picker'
import Posts from '../component/subreddit/Posts'

class Subreddit extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        selectedSubreddit: PropTypes.string,
        posts: PropTypes.array,
        selectSubreddit: PropTypes.func,
        fetchPostsIfNeeded: PropTypes.func
    }
    componentDidMount() {
        const { selectedSubreddit, fetchPostsIfNeeded } = this.props
        fetchPostsIfNeeded(selectedSubreddit);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { selectedSubreddit } = nextProps
            this.props.fetchPostsIfNeeded(selectedSubreddit);
        }
    }
    handleOnChange(e) {
        const { fetchPostsIfNeeded, selectSubreddit } = this.props;
        selectSubreddit(e.target.value);
        fetchPostsIfNeeded(e.target.value);
    }
    handleRefresh() {
        const { invalidateSubreddit, selectedSubreddit, fetchPostsIfNeeded } = this.props;
        invalidateSubreddit(selectedSubreddit);
        fetchPostsIfNeeded(selectedSubreddit);
    }
    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
        return (
            <div className="content">
                <Picker
                    options={['reactjs', 'frontend']}
                    title={selectedSubreddit}
                    onchange={e => this.handleOnChange(e)}
                />
                {
                    lastUpdated
                        ? (<span style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}
                        </span>)
                        : ''
                }
                {
                    !isFetching && <button onClick={e => this.handleRefresh()}>refresh</button>
                }
                {
                    isFetching && posts.length === 0 && <h2>Loading</h2>
                }
                {
                    posts.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { postsBySubreddit, selectedSubreddit } = state;
    const {
        isFetching,
        lastUpdated,
        item: posts
    } = postsBySubreddit[selectedSubreddit] || {
        item: [],
        isFetching: true
    }
    return {
        selectedSubreddit,
        isFetching,
        lastUpdated,
        posts
    }
}
const mapDispatchToProps = (dispatch) => ({
    selectSubreddit: (subreddit) => (dispatch(selectSubreddit(subreddit))),
    fetchPostsIfNeeded: (subreddit) => (dispatch(fetchPostsIfNeeded(subreddit))),
    invalidateSubreddit: (subreddit) => (dispatch(invalidateSubreddit(subreddit)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit)