<<<<<<< HEAD
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/MissionSlice';

const rootReducers = combineReducers({
  missions: missionReducer,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
=======
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
>>>>>>> dev
