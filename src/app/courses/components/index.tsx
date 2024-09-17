import { useEffect, useState } from "react";
import CourseCard from "../../component/common/archi-course-card";
import { ArchiCorurseProps } from "../../component/common/archi-course-card";

interface CourseWithLikesAndCarts extends ArchiCorurseProps {
  liked: boolean;
  addToCart: boolean;
}

const ArchiCourses = () => {
  const [courses, setCourses] = useState<CourseWithLikesAndCarts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCoursesData = async () => {
    try {
      const response = await fetch('/coursesData.json');
      if (!response.ok) {
        throw new Error('Unable to fetch courses data');
      }
      const courseData = await response.json();
      const updatedCourses = courseData.map((course: ArchiCorurseProps) => ({
        ...course,
        liked: false,
        addToCart: false,
      }));
      setCourses(updatedCourses);
    } catch (e) {
      setError('Reload Page...');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  const handleLikeToggle = (index: number) => {
    const updatedCourses = courses.map((course, i) =>
      i === index ? { ...course, liked: !course.liked } : course
    );
    setCourses(updatedCourses);
  };

  const handleAddtoCart = (index: number) => {
    setCourses(prevCourses =>
      prevCourses.map((course, i) =>
        i === index ? { ...course, addToCart: true } : course
      )
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          id={course.id}
          bookCover={course.bookCover}
          bookTitle={course.bookTitle}
          author={course.author}
          rating={course.rating}
          price={course.price}
          isLiked={course.liked}
          isAddedToCart={course.addToCart}
          handleLike={() => handleLikeToggle(index)}
          handleAddToCart={() => handleAddtoCart(index)}
        />
      ))}
    </div>
  );
};

export default ArchiCourses;
