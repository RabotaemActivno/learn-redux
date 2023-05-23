import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash:cashReducer,customers: customerReducer
})

export const store = configureStore({
    reducer:rootReducer
  }, composeWithDevTools(applyMiddleware(thunk)))