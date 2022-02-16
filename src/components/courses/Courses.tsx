import { LoaderScreen, ErrorScreen } from 'elements';
import { useCourses } from 'services/courses/useCourses';
import { CoursesList } from './courses-list/CoursesList';

export const Courses: React.FC = () => {
  const { courses, isLoading, isError, getCourses } = useCourses();

  if (isLoading) {
    return <LoaderScreen />;
  }

  if (isError) {
    return (
      <ErrorScreen>
        <div>Something went wrong!</div>
        <button className="border-2 p-5 w-full mt-10 bg-slate-50" onClick={getCourses}>RefetchCourses</button>
      </ErrorScreen>
    );
  }

  return <CoursesList courses={courses} />;
};
