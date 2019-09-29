import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import {todo} from './reducers/todo';

const reducers = combineReducers({todo});
const store = createStore(reducers,applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
