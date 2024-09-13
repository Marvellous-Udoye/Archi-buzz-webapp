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
    <div className={`${styles} bg-[#fff] flex justify-between items-center shadow-custom p-4`}>
      <div className='flex items-center'>
        <Image
          src={profilePicture}
          alt='Picture of post'
          width={50}
          height={50}
          className='rounded-full mr-[26px]'
        />
        <p>{text}</p>
      </div>
      {children}
    </div>
  );
};

export default AccountCard;