import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../component/subreddit/Picker'
import Posts from '../component/subreddit/Posts'
import {fetchPosts} from '../action/subreddit'


class Subreddit extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        didInvalidate: PropTypes.bool,
        items: PropTypes.array,
    };

    componentWillMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPosts(selectedSubreddit))
    }

    handleSelectChange(value) {
        console.log(value);
    }
    render() {
        const { isFetching, posts, lastUpdate, selectedSubreddit } = this.props;
        return (
            <div>
                <Picker
                    selectChange={this.handleSelectChange}
                    options={['reactjs', 'frontend']}
                    title={selectedSubreddit}
                />
                <div className='reddit-info' style={{ marginTop: '15px' }}>
                    <span>Last updated at
                        <i>
                            {new Date(lastUpdate).toLocaleTimeString()}
                        </i>
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
export default connect(mapStateToProps)(Subreddit);