import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../component/subreddit/Picker'
import Posts from '../component/subreddit/Posts'
import { fetchPosts, selectSubreddit } from '../action/subreddit'


class Subreddit extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        didInvalidate: PropTypes.bool,
        items: PropTypes.array
    };

    componentWillMount() {
        this.props.fetchPosts(this.props.selectedSubreddit);
    }

    handleSelectChange(value) {
        console.log(value);
        this.props.selectSubreddit(value);
    }
    render() {
        const { isFetching, posts, lastUpdated, selectedSubreddit } = this.props;
        return (
            <div>
                <Picker
                    selectChange={e => this.handleSelectChange(e)}
                    options={['reactjs', 'frontend']}
                    title={selectedSubreddit}
                />
                <div className='reddit-info' style={{ marginTop: '15px' }}>
                    <span>Last updated at
                        <b>
                            {new Date(lastUpdated).toLocaleTimeString()}
                        </b>
                    </span>
                    <button>Refresh</button>
                </div>

                <Posts posts={posts} />
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
    fetchPosts: (value) => dispatch(fetchPosts(value)),
    selectSubreddit: (value) => dispatch(selectSubreddit(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);