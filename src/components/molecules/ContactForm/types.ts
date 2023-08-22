import { ReactNode } from 'react';

export interface IContactFormContext {
  onSubmit: (formValues: IContactFormValues) => void;
}
export interface IContactFormContextProviderProps {
  children: ReactNode;
}
export interface IContactFormValues {
  name: string;
  email: string;
  message: string;
}
