// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './App';
import reducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

const logger = createLogger({predicate: (getState, action) => true }); // this true should be in system env

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
