import React from 'react';

type InputType = 'text' | 'password' | undefined;

interface InputProps {
  children?: React.ReactNode;
  styles?: string;
  type: InputType;
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ children, handleChange, styles, type, placeholder }) => {
  return (
    <div className='relative'>
      <input
        className={`${styles} w-full outline-none rounded-[20px] py-5 pl-16 border-[2px] flex justify-center items-center font-[500] text-[20px] focus:shadow-custom`}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};

export default Input;
