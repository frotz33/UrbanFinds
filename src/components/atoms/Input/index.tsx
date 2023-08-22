'use client';
import { IInputProps } from './types';
import styles from './index.module.scss';
import { useFormContext } from 'react-hook-form';

const { input, input__error, input__wrapper } = styles;

export const Input = ({
  type,
  id,
  label,
  name,
  value,
  className,
  labelClassName,
  register,
}: IInputProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className={input__wrapper}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        className={className ? `${input} ${className}` : input}
        type={type}
        id={id}
        value={value}
        {...register(name)}
      ></input>

      <p className={input__error}>
        {`${typeof errors[name] !== 'undefined' ? errors[name]?.message : ''}`}
      </p>
    </div>
  );
};
