import React, { Component } from 'react';

import './App.css';

import Ron from './Ron'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <h1>Generate a random Ron Swanson quote</h1>
      <Ron />
      </div>
    );
  }
}

export default App;
