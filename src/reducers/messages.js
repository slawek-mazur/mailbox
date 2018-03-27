// @flow

import * as types from "../actions/types";

function messages(state = {all: []}, action) {

  switch (action.type) {
    case types.MESSAGES_LOADING:
      return {
        ...state,
        loadingMessages: true
      };

    case types.MESSAGES_LOADED:
      let {loadingMessages, ...withoutLoadingMessage} = state;
      return withoutLoadingMessage;

    case types.LIST_ALL_MESSAGES:
      return {
        ...state,
        all: action.messages
      };

    case types.GET_THE_MESSAGE:
      return {
        ...state,
        selected: state.all.filter(e => e.id === action.id)
      };

    case types.DELETE_THE_MESSAGE:
      return {
        ...state,
        all: state.all.filter(e => e.id !== action.id)
      };

    case types.CLEAN_MESSAGE:
      let {selected, ...withoutSelected} = state;
      return withoutSelected;

    default:
      return state;

  }
}

export default messages;