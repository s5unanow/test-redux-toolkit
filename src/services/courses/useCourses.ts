import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { coursesSelector, coursesStatusSelector } from 'store/courses';
import { getCoursesThunk } from 'store/courses/thunks';

export const useCourses = () => {
  const dispatch = useDispatch();
  const getCourses = useCallback(() => dispatch(getCoursesThunk()), [dispatch]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const courses = useSelector(coursesSelector);
  const coursesLoadingState = useSelector(coursesStatusSelector);

  return {
    getCourses,
    courses,
    isLoading: coursesLoadingState === 'pending',
    isError: coursesLoadingState === 'rejected',
  };
};
