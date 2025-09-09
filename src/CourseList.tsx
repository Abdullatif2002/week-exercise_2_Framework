import React from "react";
import Course, { CourseProps } from "./Course";

interface CourseListProps {
  courses: CourseProps[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Course
          key={course.courseId}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
};

export default CourseList;

