import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './courses';

const reducers = combineReducers({
  courses: coursesReducer,
});

export const store = configureStore({
  reducer: reducers
});
