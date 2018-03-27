// @flow

import * as types from "../actions/types";

function recipients(state = [], action) {

  switch (action.type) {
    case types.LIST_RECIPIENTS:
      return [...action.recipients];
    default:
      return state;
  }
}

export default recipients;