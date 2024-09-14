import { useEffect, useState } from "react";
import CourseCard from "../../component/common/archi-course-card";
import { ArchiCorurseProps } from "../../component/common/archi-course-card";

const ArchiCourses = () => {
  const [courses, setCourses] = useState<ArchiCorurseProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchCoursesData = async () => {
    try {
      const response = await fetch('/coursesData.json')
      if (!response.ok) {
        throw new Error('Unable to fecth courses data')
      }
      const courseData = await response.json()
      setCourses(courseData)
    }
    catch (e) {
      setError('Reload Page...')
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCoursesData()
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
      {courses.map((course, index) => (
        <div key={index} className={``}>
          <CourseCard
            bookCover={course.bookCover}
            bookTitle={course.bookTitle}
            author={course.author}
            rating={course.rating}
            price={course.price}
          />
        </div>
      ))}
    </div>
  )
}

export default ArchiCourses;