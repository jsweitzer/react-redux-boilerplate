import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

    render(){
        return(
            <div>
                <h1>Add Post</h1>
                <div>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    <input type="text" name="body" onChange={this.onChange} value={this.state.body}/>
                    <button type="submit" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        )
    }

}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);