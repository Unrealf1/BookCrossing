import React from 'react';
import ReactDOM from 'react-dom';
import WrappedApp from './App';
import './index.css';
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./Store/Reducers"

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root')
);
