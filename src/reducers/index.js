// @flow

import {combineReducers} from 'redux'

import messages from './messages';
import recipients from './recipients';
import screens from './screens';

export default combineReducers({
  messages,
  recipients,
  screens
});
