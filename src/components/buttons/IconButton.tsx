import React from 'react';

interface IconButtonProps {
  title: string;
  icon: JSX.Element;
  iconPosition: 'left' | 'right';
  px: number;
  py: number;
}

const IconButton: React.FC<IconButtonProps> = ({ title, icon, iconPosition, px, py }) => {
  return (
    <button
      style={{ padding: `${py}px ${px}px` }}
      className={`flex items-center justify-center bg-blue text-white rounded-md focus:outline-none`}
    >
      {iconPosition === 'left' && icon}
      <span className="ml-2 mr-2">{title}</span>
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default IconButton;
