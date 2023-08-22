import { IContactFormValues } from '@/components/molecules/ContactForm/types';
import { UseFormRegister } from 'react-hook-form';

export interface ITextAreaProps {
  name: 'message';
  id: string;
  label: string;
  className?: string;
  labelClassName?: string;
  value?: string;
  register: UseFormRegister<IContactFormValues>;
}
