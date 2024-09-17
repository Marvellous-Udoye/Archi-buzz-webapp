"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./archi-button";

export interface CartCourseProps {
  bookCover: string;
  bookTitle: string;
  price: string;
  handleRemoveCourse?: () => void;
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
    <div className="bg-[#F6F6F6] p-2 sm:p-4 rounded-[8px] sm:rounded-[20px] flex items-center shadow-custom max-w-[780px] w-full mx-auto">
      <div>
        <Image
          src={bookCover}
          alt="Book Cover Picture"
          width={162}
          height={227}
          className="w-full h-auto object-cover sm:h-[200px] sm:w-[162px] sm:h-[227px]"
          priority
        />
      </div>

      <div className="font-medium flex flex-col gap-1 sm:gap-3 p-1 sm:p-2.5 max-w-[117px] sm:max-w-[300px] ml-1 pl-3 sm:ml-[45px] mr-[7px] sm:mr-[18px]">
        <p className="text-[8px] sm:text-[16px] leading-2.5 sm:leading-6">Artificial Intelligence in Architecture: Innovations for Future Urban Design in India</p>
        <h1 className="text-[14px] sm:text-[24px] font-bold leading-5 sm:leading-12">₦{totalPrice.toString()}</h1>
      </div>

      <div className="flex flex-col gap-1 sm:gap-[7px] sm:gap-2.5 -mt-3 sm:-mt-6">
        <p className="text-[#808080] text-center font-[10px] sm:font-medium text-[7px] sm:text-base leading-2.5 sm:leading-6">Qty</p>

        <div className="flex items-center gap-1 sm:gap-4">
          <Button
            handleClick={handleDecrease}
            styles="bg-[#FFDB99] h-[20px] sm:h-10 w-[20px] sm:w-10 sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-[3px] sm:rounded-[6px] active:bg-[#CCB68F] transition ease duration-100"
          >
            <svg className="w-[5px] sm:w-[14px]" xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2" fill="none">
              <path d="M1 1H13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>

          <span className="border rounded-[6px] h-[20px] sm:h-[40px] w-[20px] sm:w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center font-medium text-[12px] sm:text-[20px] leading-5 sm:leading-12 ">
            {quantity}
          </span>

          <Button
            handleClick={handleIncrease}
            styles="bg-[#FFDB99] h-[20px] sm:h-10 w-[20px] sm:w-10 sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-[3px] sm:rounded-[6px] active:bg-[#CCB68F] transition ease duration-100"
          >
            <svg className="w-[5px] sm:w-[14px]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H7M7 7H13M7 7V1M7 7V13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex items-center ml-6 sm:ml-[51px] mr-1">
        <svg
          onClick={handleRemoveCourse}
          className="cursor-pointer h-2 w-2 sm:h-5 sm:w-5"
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

