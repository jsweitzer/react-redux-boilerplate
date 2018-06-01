import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { NEW_POST } from '../actions/types';

class Posts extends Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.props.fetchPosts();
    }
    render(){
        const postItems = this.props.webPosts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}.</p>
            </div>
        ));
        return (
            <div>
                <div>
                    <h1 onClick={this.onClick}>Web Data</h1>
                    {postItems}
                </div>
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    webPosts: PropTypes.array
}

const mapStateToProps = state => ({
    webPosts: state.posts.webItems
})

export default connect(mapStateToProps, { fetchPosts })(Posts)