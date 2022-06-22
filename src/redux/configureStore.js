import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/MissionSlice';

const rootReducers = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
const composeEnhancers = compose;

// export default configureStore({
//   reducer: {
//     rockets: rocketReducer,
//   },
// },
composeEnhancers(applyMiddleware(thunk));
