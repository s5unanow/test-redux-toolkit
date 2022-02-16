import type { CourseCardFieldTypes } from './course-card-field.types';

export const CourseCardField: React.FC<CourseCardFieldTypes> = ({
  text,
  title,
}) => {
  return (
    <div>
      <span className="font-bold">{title} </span>
      {text}
    </div>
  );
};
