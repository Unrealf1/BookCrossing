import React from 'react';
import ReactDOM from 'react-dom';
import WrappedApp from './App';
import './index.css';
import { createStore } from "redux"
import { Provider } from "react-redux"
import {actions, types} from "./Actions"


const initialState = {
  authenticated: false
};

const rootReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case types.ACTION_AUTHENTICATE:
      return {
        ...state,
        authenticated: true
      }
      break;
  
    default:
      console.log("Got unknown action!")
      console.log(action)
      break;
  }
  return state;
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root')
);
