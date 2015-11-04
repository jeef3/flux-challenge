import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppContainer from './containers/AppContainer.jsx';
import { changePlanet } from './actions/planet';
import { loadNextJediAsync } from './actions/jedi';
import * as reducers from './reducers';

const finalCreateStore = applyMiddleware(thunk)(createStore);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app'));

// Listen for planet change updates
const ws = new WebSocket('ws://localhost:4000');
ws.onmessage = (event) => {
  store.dispatch(
    changePlanet(JSON.parse(event.data)));
}

// Start loading Jedis
store.dispatch(loadNextJediAsync());
