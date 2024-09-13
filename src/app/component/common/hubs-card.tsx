import React from 'react';

interface HubsCardProps {
  text: string;
  numbers: number;
  children: React.ReactNode;
  styles: string;
}

const HubsCard = ({ children, styles, text, numbers }: HubsCardProps) => {
  return (
    <div className={`${styles} bg-[#fff] flex justify-between items-center shadow-custom p-4`}>
      <div className='text-[16px] font-[500] leading-8'>
        <p>{text}</p>
        <span className='text-[#808080] ml-3'>{numbers}k members</span>
      </div>
      {children}
    </div>
  );
};

export default HubsCard;