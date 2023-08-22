import React from 'react';
import { IButtonProps } from './types';

export const Button = ({ text, className, type, icon, onClick }: IButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={className ? className : ''}>
      {icon ? icon : <></>}
      {text}
    </button>
  );
};
