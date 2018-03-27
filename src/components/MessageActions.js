//@flow

import React from "react";
import {connect} from 'react-redux'
import Ionicon from 'react-ionicons';
import {deleteMessage, markMessageRead, respondMessage} from '../actions';
import './Messages.css';
import {switchScreen} from "../actions/index";

class MessageActions extends React.Component {

  render() {
    const {messageId, size, showMarker = true} = this.props;

    const iconSize = size || 20;

    return (
      <div className="Actions">
        {showMarker && <a onClick={(e) => this.props.markRead(e, messageId)} className="mark">
          <Ionicon icon="md-checkmark" fontSize={`${iconSize}px`} color="#111"/></a>}
        <a onClick={(e) => this.props.respond(e, messageId)} className="respond">
          <Ionicon icon="ios-undo" fontSize={`${iconSize}px`} color="#111"/></a>
        <a onClick={(e) => this.props.remove(e, messageId)} className="delete">
          <Ionicon icon="ios-trash-outline" fontSize={`${iconSize}px`} color="#111"/></a>
      </div>
    )
  }
}

function actions(dispatch) {
  return {
    //todo: this looks so poor but no better idea for this moment
    markRead: (e, id) => {
      e.stopPropagation();
      dispatch(markMessageRead(id));
    },
    respond: (e, id) => {
      e.stopPropagation();
      dispatch(respondMessage(id));
      dispatch(switchScreen('FORM_SCREEN'));
    },
    remove: (e, id) => {
      e.stopPropagation();
      dispatch(deleteMessage(id));
    },
  };
}

export default connect(_ => ({}), actions)(MessageActions);