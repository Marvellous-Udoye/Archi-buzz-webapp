"use client";

import { useState } from "react";
import Button from "./archi-button";

export interface CartSummaryProps {
  price?: string;
}

const CartSummary = ({ price }: CartSummaryProps) => {
  return (
    <div className="bg-[#F6F6F6] shadow-custom rounded-[16px] sm:rounded-[20px] p-2.5 sm:p-4 flex flex-col gap-4 sm:gap-5 h-fit max-w-[420px] w-full sm:max-w-none sm:w-full md:w-[750px] lg:w-[440px] mx-auto lg:mr-0">
      <h3 className="font-bold text-base sm:text-[20px] leading-[30px] text-center">Order Summary</h3>

      <div className="flex flex-col gap-2.5 sm:gap-4 text-[12px] leading-[18px] sm:text-base sm:leading-6">
        <span className="flex justify-between">
          <p>Item (3)</p>
          <p>₦7500</p>
        </span>
        <span className="flex justify-between">
          <p>Item (1)</p>
          <p>₦2500</p>
        </span>
        <span className="flex justify-between">
          <p>Item (2)</p>
          <p>₦3000</p>
        </span>
        <span className="flex justify-between">
          <p>Item (1)</p>
          <p>₦3000</p>
        </span>
        <span className="flex justify-between">
          <p>Item (2)</p>
          <p>₦4000</p>
        </span>
      </div>

      <div className="flex justify-between font-medium text-[20px] pt-1 pt-[6px] sm:text-[24px] leading-[30px] sm:leading-12 border-t-[1px] sm:border-t-[2px] border-t-black border-dashed">
        <h1>Sub-total:</h1>
        <h1>₦39,500</h1>
      </div>

      <Button
        styles="bg-[#FFA500] text-white py-2.5 sm:py-4 w-full rounded-[8px] sm:rounded-[10px] text-[14px] sm:text-[20px] active:bg-[#CC8400] transition ease duration-100ms">
        <p>Checkout</p>
      </Button>
    </div>
  );
};

export default CartSummary;

