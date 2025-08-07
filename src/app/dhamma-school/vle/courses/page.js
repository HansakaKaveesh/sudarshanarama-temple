import { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backend/api/courses.php")
      .then(res => res.json())
      .then(data => {
        if (data.success) setCourses(data.courses);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.course_id} className="mb-2">
            <div className="font-semibold">{course.name}</div>
            <div className="text-gray-600">{course.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}