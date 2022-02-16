import { LoaderScreen, ErrorScreen } from 'elements';
import { useCourses } from 'services/courses/useCourses';
import { CoursesList } from './courses-list/CoursesList';

export const Courses: React.FC = () => {
  const { courses, isLoading, isError } = useCourses();

  if (isLoading) {
    return <LoaderScreen />;
  }

  if (isError) {
    return <ErrorScreen>Something went wrong!</ErrorScreen>;
  }

  return <CoursesList courses={courses} />
};
