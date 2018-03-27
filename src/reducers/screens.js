// @flow

import * as types from "../actions/types";

function screens(state = {}, action) {

  switch (action.type) {
    case types.SELECT_SCREEN:
      return {screen: action.screen};
    default:
      return state;
  }
}

export default screens;