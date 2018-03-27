//@flow

import React from "react";
import {connect} from 'react-redux'
import Ionicon from 'react-ionicons';
import {switchScreen,cleanMessage} from '../actions';
import './Navigation.css';

class Navigation extends React.Component {

  render() {
    return (
      <div className="Navigation">
        <a onClick={this.props.listAll} className="show"><Ionicon icon="ios-filing-outline" fontSize="30px" color="#111"/></a>
        <a onClick={this.props.createNew} className="new"><Ionicon icon="ios-document-outline" fontSize="30px" color="#111"/></a>
      </div>
    )
  }
}

function actions(dispatch) {
  return {
    listAll: _ => dispatch(switchScreen('ALL_SCREEN')),
    createNew: _ => {
      Promise.resolve(dispatch(cleanMessage())).then(() => dispatch(switchScreen('FORM_SCREEN')));
    }
  };
}

export default connect(_ => ({}), actions)(Navigation);