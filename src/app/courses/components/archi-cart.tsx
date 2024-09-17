"use client";

import { CartCourseProps } from '@/app/component/common/archi-cart-course';
import CourseInCart from '@/app/component/common/archi-cart-course';
import { useEffect, useState } from 'react';

const Cart = () => {
  const [coursesInCart, setCoursesInCart] = useState<CartCourseProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCoursesInCart = async (): Promise<CartCourseProps[] | undefined> => {
    try {
      const response = await fetch('/coursesData.json');
      if (!response.ok) {
        throw new Error('Failed to fetch course data');
      }
      const cartCourses = await response.json();
      return cartCourses;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  useEffect(() => {
    const loadCourses = async () => {
      const fetchedCourses = await fetchCoursesInCart();
      if (fetchedCourses) {
        setCoursesInCart(fetchedCourses);
      } else {
        setError('Failed to fetch courses');
      }
      setLoading(false);
    };
    loadCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {coursesInCart.length > 0 ? (
        <div className='flex flex-col gap-5 '>
          {coursesInCart.map((course, index) => (
            <CourseInCart
              key={index}
              bookCover={course.bookCover}
              bookTitle={course.bookTitle}
              price={course.price}
              handleRemoveCourse={() => {
                setCoursesInCart(prevCourses => prevCourses.filter((_, i) => i !== index));
              }}
            />
          ))}
        </div>
      ) : (
        <p>No courses in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
