import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Button {
  children: React.ReactNode;
  styles: string;
  type?: ButtonType;
  disabled?: boolean;
  icon?: React.ReactNode | undefined;
  handleClick?: () => void;
}

const Button = ({ children, handleClick, styles, disabled, icon, type }: Button) => {
  return (
    <div>
      <button
        className={`${styles} bg-[#FFA809] flex justify-center items-center gap-[10px] font-[500] text-[20px]`}
        type={type}
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
        {icon}
      </button>
    </div>
  );
};

export default Button;