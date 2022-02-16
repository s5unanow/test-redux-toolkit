import { TypedUseSelectorHook } from 'react-redux';
import { store } from 'store';
import { RequestStatus } from './api';
import { Course } from './entities';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppUseSelector = TypedUseSelectorHook<RootState>;

export type CoursesSlice = {
  courses: Course[];
  coursesStatus: RequestStatus;
};
