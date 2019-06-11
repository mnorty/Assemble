import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(//provider is what lets the entire app have access to store. All Index.js does is give the entire app access to store, and render App.js
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'))