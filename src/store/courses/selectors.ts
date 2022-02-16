import type { RootState } from 'ts';

export const coursesSelector = (state: RootState) => state.courses.courses;
export const coursesStatusSelector = (state: RootState) =>
  state.courses.coursesStatus;
