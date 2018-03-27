//@flow

import React from "react";
import {connect} from 'react-redux'
import MessageActions from './MessageActions';
import './Messages.css';

class MessageView extends React.Component {

  render() {
    const {id, created, recipient, subject, message} = this.props.content;

    return (
      <div className="Message MessageView">
        <div className="Header">
          <span className="Recipient">{recipient}</span>
          <span className="Created">{created}</span>
        </div>
        <div className="Subject">{subject}</div>
        <div className="Body">{message}</div>
        <MessageActions messageId={id} size={30} showMarker={false}/>
      </div>
    )
  }
}

function select(state) {
  return {
    content: state.messages.selected[0]
  }
}

export default connect(select)(MessageView);