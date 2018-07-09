import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../component/subreddit/Picker'
import Posts from '../component/subreddit/Posts'
import { fetchPostsIfNeeded, selectSubreddit, invalidateSubreddit } from '../action/subreddit'


class Subreddit extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        didInvalidate: PropTypes.bool,
        items: PropTypes.array
    };

    componentWillMount() {
        this.props.fetchPostsIfNeeded(this.props.selectedSubreddit);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            this.props.fetchPostsIfNeeded(nextProps.selectedSubreddit);
        }
    }
    handleSelectChange(value) {
        console.log(value);
        this.props.selectSubreddit(value);
    }
    handleRefresh(e) {
        e.preventDefault();
        this.props.invalidateSubreddit(this.props.selectedSubreddit);
        this.props.fetchPostsIfNeeded(this.props.selectedSubreddit);
    }
    render() {
        const { isFetching, posts, lastUpdated, selectedSubreddit } = this.props;
        const isEmpty = posts.length === 0;
        return (
            <div className='subreddit'>
                <Picker
                    selectChange={e => this.handleSelectChange(e)}
                    options={['reactjs', 'frontend']}
                    title={selectedSubreddit}
                />
                <p>
                    {
                        lastUpdated &&
                        <span>Last updated at
                            {
                                new Date(lastUpdated).toLocaleTimeString()
                            }
                        </span>
                    }
                    {
                        !isFetching && <button onClick={e => this.handleRefresh(e)}>Refresh</button>
                    }
                </p>
                {
                    isEmpty
                        ? (
                            isFetching
                                ? <h2>isLoading</h2>
                                : <h2>Empty.</h2>
                        )
                        : (
                            <div className='subreddit-list' style={{ opacity: isFetching ? 0.5 : 1 }}>
                                <Posts posts={posts} />
                            </div>
                        )
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { postsBySubreddit, selectedSubreddit } = state;
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] };
    return {
        selectedSubreddit,
        isFetching,
        lastUpdated,
        posts
    }
}
const mapDispatchToProps = dispatch => ({
    fetchPostsIfNeeded: (value) => dispatch(fetchPostsIfNeeded(value)),
    selectSubreddit: (value) => dispatch(selectSubreddit(value)),
    invalidateSubreddit: (value) => dispatch(invalidateSubreddit(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);