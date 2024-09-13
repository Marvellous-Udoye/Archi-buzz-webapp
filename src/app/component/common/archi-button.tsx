import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Button {
  children: React.ReactNode;
  styles: string;
  cssStyle?: React.CSSProperties;
  type?: ButtonType;
  disabled?: boolean;
  icon?: React.ReactNode | undefined;
  handleClick?: () => void;
}

const Button = ({ children, handleClick, styles, cssStyle, disabled, icon, type }: Button) => {
  return (
    <div>
      <button
        className={`${styles} flex justify-center items-center gap-[10px] font-[500] text-[16px]`}
        type={type}
        disabled={disabled}
        onClick={handleClick}
        style={cssStyle}
      >
        {children}
        {icon}
      </button>
    </div>
  );
};

export default Button;