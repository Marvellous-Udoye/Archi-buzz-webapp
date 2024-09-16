"use client"

import { useEffect, useState } from 'react';
import { ArchiCorurseProps } from '@/app/component/common/archi-course-card';
import Image from 'next/image';
import Button from '@/app/component/common/archi-button';
import CourseInCart from '@/app/component/common/archi-cart-course';

const Cart = ({ id }: { id: string }) => {
  const [courseInCart, setCourseInCart] = useState<ArchiCorurseProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCourseInCart = async (): Promise<ArchiCorurseProps | undefined> => {
    try {
      const response = await fetch('/coursesData.json');
      if (!response.ok) {
        throw new Error('Failed to fetch course data');
      }
      const cart = await response.json();
      return cart
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  useEffect(() => {
    const courses = async () => {
      const fetchedCourse = await fetchCourseInCart();
      if (fetchedCourse) {
        setCourseInCart(fetchedCourse);
      } else {
        setError('Failed to fetch course');
      }
      setLoading(false);
    }
    courses()
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`max-w-[1266px] mx-auto px-4 lg:px-0`}>
      {courseInCart ? (
        <div>
          {/* <CourseInCart></CourseInCart> */}
        </div>
      ) : (
        <p>Failed to fetch courses in cart.....</p>
      )}
    </div>
  );
};

export default Cart;
