"use cleient";

import { useEffect, useState } from "react";
import CourseCard, {
  ArchiCorurseProps,
} from "../../component/common/archi-course-card";
import useFetch from "@/hooks/fetchData";

interface CourseWithLikesAndCarts extends ArchiCorurseProps {
  liked: boolean;
  addToCart: boolean;
}

const ArchiCourses = () => {
  const [courses, setCourses] = useState<CourseWithLikesAndCarts[]>([]);
  const { data, loading, error } = useFetch(
    "/coursesData.json",
    "Error fetching courses"
  );

  const updatedCourses = data.map((course: ArchiCorurseProps) => ({
    ...course,
    liked: false,
    addToCart: false,
  }));

  useEffect(() => {
    setCourses(updatedCourses);
  }, [data, updatedCourses]);

  const handleLikeToggle = (index: number) => {
    const updatedCourses = courses.map((course, i) =>
      i === index ? { ...course, liked: !course.liked } : course
    );
    setCourses(updatedCourses);
  };

  const handleAddtoCart = (index: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course, i) =>
        i === index ? { ...course, addToCart: true } : course
      )
    );
  };

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
