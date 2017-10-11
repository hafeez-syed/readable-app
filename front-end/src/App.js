import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchCategories } from './utils/apis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            {
                fetchCategories()
                    .then((result) => {

                    })
            }
        </p>
      </div>
    );
  }
}

export default App;
