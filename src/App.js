import React, { Component } from 'react';
import Ingredient from './Components/Ingredient';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { initState } from '../actions/index';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.props.initState();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Build Something Awesome</h1>
        </header>
      </div>
    );
  }
}


PostForm.propTypes = {
  initState: PropTypes.func.isRequired
}

export default connect(null, {initState})(App)
