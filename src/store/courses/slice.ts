import { createSlice } from '@reduxjs/toolkit';
import { COURSES_SLICE } from './constants';
import { getCoursesThunk } from './thunks';
import type { CoursesSlice } from 'ts';

const initialState: CoursesSlice = {
  courses: [],
  coursesStatus: 'idle',
};

const sliceConfig = createSlice({
  name: COURSES_SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoursesThunk.pending, (state) => {
      state.coursesStatus = 'pending';
    });
    builder.addCase(getCoursesThunk.rejected, (state) => {
      state.coursesStatus = 'rejected';
    });
    builder.addCase(getCoursesThunk.fulfilled, (state, { payload }) => {
      state.courses = payload;
      state.coursesStatus = 'fulfilled';
    });
  },
});

export const reducer = sliceConfig.reducer;
