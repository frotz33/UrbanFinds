import React from 'react';
import styles from './index.module.scss';
const { footer__wrapper, footer__paragraph } = styles;

export const Footer = () => {
  return (
    <footer className={footer__wrapper}>
      <p className={footer__paragraph}>&copy; 2023 UrbanFinds. All rights reserved.</p>
    </footer>
  );
};
