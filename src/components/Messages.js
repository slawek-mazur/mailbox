//@flow

import React from "react";
import {connect} from 'react-redux'
import {PulseLoader} from "react-spinners";
import {Scrollbars} from 'react-custom-scrollbars';
import MessageItem from './MessageItem';
import {getAllMessages, getMessage, messagesLoaded, messagesLoading, switchScreen} from '../actions';

import './Messages.css';

class Messages extends React.Component {

  constructor(props) {
    super(props);

    this.loadMessage = this.loadMessage.bind(this);
  }

  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    return (
      <div className="Messages">
        {!this.props.isLoading && <Scrollbars autoHide renderThumbHorizontal={_ => <span/>}>
          <ul>
            {this.props.messages.map((message) => {
              return <MessageItem key={message.id} content={message} onClick={() => this.loadMessage(message.id)}/>
            })}
          </ul>
        </Scrollbars>}
        {this.props.isLoading && <div className="loader"><PulseLoader size={7} color="#222"/></div>}
      </div>
    )
  }

  loadMessage(id) {
    this.props.loadMessage(id);
  }
}

function actions(dispatch) {
  return {
    loadMessages: _ => {
      Promise.resolve(dispatch(messagesLoading()))
        .then(() => dispatch(getAllMessages()))
        .then(() => dispatch(messagesLoaded()));
    },
    loadMessage: id => {
      dispatch(getMessage(id));
      dispatch(switchScreen('SINGLE_SCREEN'));
    }
  };
}

function select(store) {
  return {
    messages: store.messages.all ? store.messages.all : [],
    isLoading: store.messages.loadingMessages
  };
}

export default connect(select, actions)(Messages);