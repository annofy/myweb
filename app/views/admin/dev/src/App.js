import React, {Component} from 'react';
import './static/css/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import WebLayout from '@pages/WebLayout.js'

class App extends Component {

  render() {
    return (
      <Router>
        <WebLayout/>
      </Router>
    );
  }
}

export default App;
