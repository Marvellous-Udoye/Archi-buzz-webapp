"use client"

import { useEffect, useState } from 'react';
import Cart from '../components/archi-cart';
import CourseInCart from '@/app/component/common/archi-cart-course';
import bookCover from '../../../../public/images/courses/book2.png'

const pass = () => {

}
const CartPage = () => {
  return (
    <div className={`max-w-[1266px] mx-auto px-4 lg:px-0`}>
     {/* <Cart></Cart> */}
     <CourseInCart
       bookCover={bookCover}
       bookTitle=''
       price=''
       handleRemoveCourse={pass}
     >

     </CourseInCart>
    </div>
  );
};

export default CartPage;
