import { CourseCardField } from './components/course-card-field/CourseCardField';
import { CourseCardTypes } from './course-card.types';

export const CourseCard: React.FC<CourseCardTypes> = ({
  title,
  description,
  creationDate
}) => {
  return (
    <div className="p-10 border-2">
      <CourseCardField title="Title" text={title} />
      <CourseCardField title="Description" text={description} />
      <CourseCardField title="Creation Date" text={creationDate} />
    </div>
  );
};
