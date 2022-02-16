import { CourseCard } from '../course-card/CourseCard';
import { CoursesListTypes } from './courses-list.types';

export const CoursesList: React.FC<CoursesListTypes> = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard {...course} />
        </li>
      ))}
    </ul>
  );
};
