import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/MissionSlice';

const rootReducers = combineReducers({
  missions: missionReducer,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
