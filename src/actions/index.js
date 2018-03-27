//@flow

import Api from '../common/api';
import * as types from './types';

function messagesLoading() {
  return { type: types.MESSAGES_LOADING }
}

function messagesLoaded() {
  return { type: types.MESSAGES_LOADED }
}

function getAllMessages() {
  return dispatch => {
    return Api.get('messages').then((resp) => {
      dispatch(listAllMessages(resp))

    }).catch((ex) => {
      console.error(ex)
    });
  }
}

function getMessage(messageId) {
  return {
    type: types.GET_THE_MESSAGE,
    id: messageId
  }
}

function listAllMessages(messages) {
  return {
    type: types.LIST_ALL_MESSAGES,
    messages
  }
}

function sendMessage(data) {
  return _ => {
    return Api.post('messages', data).catch((ex) => {
      console.error(ex)
    });
  }
}

function markMessageRead(messageId) {
  return _ => {
    const now = new Date();
    return Api.patch('messages/' + messageId, {"displayed": now.toLocaleFormat("%Y-%m-%d %T")}).catch((ex) => {
      console.error(ex)
    });
  };
}

function respondMessage(messageId) {
  return getMessage(messageId);
}

function deleteMessage(messageId) {
  return dispatch => {
    return Api.delete('messages/' + messageId).then(_ => {
      dispatch(removeMessage(messageId));

    }).catch((ex) => {
      console.error(ex)
    });
  };
}

function removeMessage(id) {
  return {
    type: types.DELETE_THE_MESSAGE,
    id
  }
}

function getRecipients() {
  return dispatch => {
    return Api.get('recipients').then((resp) => {
      dispatch(listRecipients(resp))

    }).catch((ex) => {
      console.error(ex)
    });
  }
}

function listRecipients(recipients) {
  return {
    type: types.LIST_RECIPIENTS,
    recipients
  }
}

function cleanMessage() {
  return {
    type: types.CLEAN_MESSAGE
  }
}

function switchScreen(screenName) {
  return {
    type: types.SELECT_SCREEN,
    screen: screenName
  }
}

export {
  messagesLoading,
  messagesLoaded,
  getAllMessages,
  getMessage,
  markMessageRead,
  sendMessage,
  respondMessage,
  deleteMessage,
  getRecipients,
  switchScreen,
  cleanMessage
}