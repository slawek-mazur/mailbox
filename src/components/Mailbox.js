//@flow

import React from "react";
import {connect} from 'react-redux'
import Header from './Header';
import Navigation from "./Navigation";
import Messages from "./Messages";
import MessageView from "./MessageView";
import MessageForm from "./MessageForm";
import './Mailbox.css';

class Mailbox extends React.Component {

  render() {
    let activeScreen;
    switch (this.props.screen) {
      case 'SINGLE_SCREEN':
        activeScreen = this.MessageViewScreen();
        break;

      case 'FORM_SCREEN':
        activeScreen = this.MessageFormScreen();
        break;

      default:
        activeScreen = this.MessagesScreen();
    }

    return (
      <div className="Mailbox">
        <Header/>
        <Navigation/>
        {activeScreen}
      </div>
    )
  }

  MessagesScreen() {
    return <Messages/>;
  }

  MessageViewScreen(selectedMessage) {
    return <MessageView content={selectedMessage}/>
  }

  MessageFormScreen() {
    return <MessageForm/>
  }
}

function select(state) {
  return {
    screen: state.screens.screen,
  }
}

export default connect(select)(Mailbox);