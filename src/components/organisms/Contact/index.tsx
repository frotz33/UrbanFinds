'use client';
import React from 'react';
import styles from './index.module.scss';

import { ContactForm } from '@/components/molecules/ContactForm';
const {
  contact,
  contact__heading,
  contact__header,
  contact__info,
  contact__infoParagraph,
  contact__address,
  contact__addressEmail,
  bold,
  form,
} = styles;

export const Contact = () => {
  return (
    <section className={contact}>
      <header className={contact__header}>
        <h1 className={contact__heading}>Contact Us</h1>
      </header>
      <main>
        <section className={contact__info}>
          <p className={contact__infoParagraph}>
            If you have any questions or inquiries, feel free to contact us using the information
            below.
          </p>
          <address className={contact__address}>
            <p>
              <span className={bold}>Email:</span>{' '}
              <a href="mailto:info@example.com" className={contact__addressEmail}>
                info@example.com
              </a>
            </p>
            <p>
              <span className={bold}>Phone:</span>{' '}
              <a href="tel:  +1 (123) 456-7890" className={contact__addressEmail}>
                +1 (123) 456-7890
              </a>
            </p>
            <p>
              <span className={bold}>Address:</span> 123 Street, City, Country
            </p>
          </address>
        </section>
        <section className={form}>
          <ContactForm />
        </section>
      </main>
    </section>
  );
};
