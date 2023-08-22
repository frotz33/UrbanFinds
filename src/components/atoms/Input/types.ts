import { IContactFormValues } from '@/components/molecules/ContactForm/types';
import { UseFormRegister } from 'react-hook-form';

export interface IInputProps {
  type: HTMLInputElement['type'];
  name: 'email' | 'name';
  id: string;
  label: string;
  className?: string;
  labelClassName?: string;
  value?: string;
  register: UseFormRegister<IContactFormValues>;
}
