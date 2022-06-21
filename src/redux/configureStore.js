import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const composeEnhancers = compose;

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
},
composeEnhancers(applyMiddleware(thunk)));
