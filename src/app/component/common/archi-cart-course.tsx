"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "./archi-button";

export interface CartCourseProps {
  bookCover: StaticImageData;
  bookTitle: string;
  price: string; 
  handleRemoveCourse: () => void;
}

const CourseInCart = ({ bookCover, bookTitle, price, handleRemoveCourse }: CartCourseProps) => {
 
  const initialPrice = 2500;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(initialPrice);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setTotalPrice(prevTotalPrice => prevTotalPrice + initialPrice);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      setTotalPrice(prevTotalPrice => prevTotalPrice - initialPrice);
    }
  };

  return (
    <div className="bg-[#F6F6F6] p-5 rounded-[20px] flex items-center shadow-custom max-w-[780px]">
      <div>
        <Image
          src={bookCover}
          alt="Book Cover Picture"
          width={162}
          height={227}
          className="w-full h-auto object-cover h-[200px] sm:w-[162px] sm:h-[227px]"
          priority
        />
      </div>

      <div className="font-medium flex flex-col gap-2.5 p-2.5 max-w-[267px] ml-[51px] mr-[18px]">
        <p className="font-base sm:text-[20px] leading-6">Artificial Intelligence in Architecture: Innovations for Future Urban Design in India</p>
        <h1 className="text-[32px] font-bold leading-12">₦{totalPrice.toString()}</h1>
      </div>

      <div className="flex flex-col gap-2 sm:gap-2.5">
        <p className="text-[#808080] text-center font-medium text-base leading-6">Qty</p>

        <div className="flex gap-3 sm:gap-4">
          <Button
            handleClick={handleDecrease}
            styles="bg-[#FFDB99] h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center rounded-[6px] active:bg-[#CCB68F] transition ease duration-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2" fill="none">
              <path d="M1 1H13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>

          <span className="border rounded-[6px] h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center font-medium text-[24px] leading-12">
            {quantity}
          </span>

          <Button
            handleClick={handleIncrease}
            styles="bg-[#FFDB99] h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center rounded-[6px] active:bg-[#CCB68F] transition ease duration-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H7M7 7H13M7 7V1M7 7V13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex items-center ml-[51px]">
        <svg
          onClick={handleRemoveCourse}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M2 22L12 12M12 12L22 2M12 12L2 2M12 12L22 22" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default CourseInCart;

