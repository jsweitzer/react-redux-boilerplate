import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NEW_POST } from '../actions/types';

class Posts extends Component {
    render(){
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}.</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {})(Posts)