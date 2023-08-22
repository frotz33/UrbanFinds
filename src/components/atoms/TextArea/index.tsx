import React from 'react';
import { ITextAreaProps } from './types';

export const TextArea = ({
  name,
  id,
  label,
  className,
  labelClassName,
  register,
}: ITextAreaProps) => {
  return (
    <>
      <label htmlFor="message" className={labelClassName}>
        {label}
      </label>
      <textarea id={id} rows={4} className={className} {...register(name)}></textarea>
    </>
  );
};
