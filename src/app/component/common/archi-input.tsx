import React from 'react';

type InputType = 'text' | 'password' | undefined;

interface InputProps {
  id: string;
  value?: string
  children?: React.ReactNode;
  styles?: string;
  type: InputType;
  placeholder?: string;
  autocomplete?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ children, handleChange, handleFocus, styles, type, placeholder, id, value, autocomplete }) => {
  return (
    <div className='relative'>
      <input
        id={id}
        value={value}
        className={`${styles} w-full outline-none rounded-[20px] py-4 pl-16 border-[2px] flex justify-center items-center font-[500] text-[16px] hover:shadow-custom focus:border-[#FFA500]`}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        autoComplete={autocomplete}
      />
      {children}
    </div>
  );
};

export default Input;
