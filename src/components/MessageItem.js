//@flow

import React from "react";
import {connect} from 'react-redux'
import MessageActions from './MessageActions';
import './Messages.css';

class MessageItem extends React.Component {

  render() {
    const {content, onClick} = this.props;

    return (
      <div className="Message MessageItem" onClick={onClick}>
        <div className="hidden">
          <span>{content.id}</span>
          <span>{content.sender}</span>
          <span>{content.displayed}</span>
        </div>
        <div className="Header">
          <span className="Recipient">{content.recipient}</span>
          <span className="Created">{content.created}</span>
        </div>
        <div className="Subject">{content.subject}</div>
        <div className="Body">{this.trimToLength(content.message)}</div>
        <MessageActions messageId={content.id}/>
      </div>
    )
  }

  trimToLength(string: String) {
    const max = 150;
    return string.length > max ? string.substr(0, max) + '...' : string;
  }
}

export default connect()(MessageItem);