// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux'
import Mailbox from './components/Mailbox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mailbox {...this.props}/>
      </div>
    );
  }
}

export default connect()(App);
