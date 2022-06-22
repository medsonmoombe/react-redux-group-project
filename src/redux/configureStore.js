import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/MissionSlice';
import { applyMiddleware, compose } from 'redux';
import rocketReducer from './rockets/rockets';
import thunk from 'redux-thunk';

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
