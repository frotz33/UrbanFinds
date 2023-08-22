import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const cutDescription = (text: string) => {
  const desc = text.replace(/^(.{80}[^\s]*).*/, '$1');
  return desc;
};

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Invalid email')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
});

export const getFormConfig = () => {
  return { resolver: yupResolver(validationSchema) };
};
