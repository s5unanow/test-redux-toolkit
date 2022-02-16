import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_COURSES } from '../constants';
import { getCoursesApi } from 'services';

export const getCoursesThunk = createAsyncThunk(
  GET_COURSES,
  async (_, { rejectWithValue }) => {
    try {
      return getCoursesApi();
    } catch (e) {
      return rejectWithValue(false);
    }
  }
);
