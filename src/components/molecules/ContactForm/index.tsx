import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@/components/atoms/Button';
import styles from './index.module.scss';
import { Input } from '@/components/atoms/Input';
import { TextArea } from '@/components/atoms/TextArea';
import { IContactFormValues } from './types';
import { getFormConfig } from '@/utils';
const {
  contact__form,
  contact__form__label,
  contact__form__message,
  contact__form__textInput,
  contact__form__title,
  message__label,
  contact__form__submitBtn,
  contact__form__submitted,
} = styles;

export const ContactForm = () => {
  const form = useForm<IContactFormValues>(getFormConfig());
  const {
    handleSubmit,
    register,
    formState: { isSubmitSuccessful },
  } = form;

  const onSubmit = (formValues: IContactFormValues) => {
    // handling form values
    console.log(formValues);
  };
  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className={contact__form}>
          <h2 className={contact__form__title}>Contact Form</h2>
          <Input
            type="text"
            id="name"
            name="name"
            className={contact__form__textInput}
            label="Name:"
            labelClassName={contact__form__label}
            register={register}
          />
          <Input
            type="email"
            id="email"
            name="email"
            className={contact__form__textInput}
            label="Email:"
            labelClassName={contact__form__label}
            register={register}
          />
          <TextArea
            id="message"
            name="message"
            label="Message:"
            className={contact__form__message}
            labelClassName={`${contact__form__label} ${message__label}`}
            register={register}
          />
          <Button type="submit" text="Send" className={contact__form__submitBtn} />
          {isSubmitSuccessful ? <p className={contact__form__submitted}>Message sent!</p> : <></>}
        </form>
      </FormProvider>
    </>
  );
};
