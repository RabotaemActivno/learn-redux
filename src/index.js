import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


const defaultState = {
  cash: 5
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload }

    default:
      return state
  }
}

const store = configureStore({
  reducer:reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <App />
  </Provider>
);

