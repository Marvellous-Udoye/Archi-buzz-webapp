import Image from 'next/image';
import React from 'react';

interface AccountCardProps {
  text: string;
  profilePicture: string;
  children: React.ReactNode;
  styles: string;
}

const AccountCard = ({ children, styles, text, profilePicture }: AccountCardProps) => {
  return (
    <div className={`${styles} bg-[#fff] flex justify-between items-center shadow-custom`}>
      <div className='flex items-center'>
        <Image
          src={profilePicture}
          alt='Profile Picture'
          width={50}
          height={50}
          className='rounded-full mr-4 sm:mr-[26px] w-10 h-10 sm:w-[50px] sm:h-[50px]'
        />
        <p>{text}</p>
      </div>
      {children}
    </div>
  );
};

export default AccountCard;