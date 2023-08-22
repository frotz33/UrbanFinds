'use client';
import React, { useState } from 'react';
import { IHamburgerProps } from './types';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

import styles from './index.module.scss';
const { hamburger, hamburger__backdrop, active, activeWrapper, actionBtn } = styles;

export const Hamburger = ({ children }: IHamburgerProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={`${hamburger__backdrop} ${isActive ? activeWrapper : ''}`}></div>
      <div className={`${hamburger} ${isActive ? active : ''}`}>
        {!isActive ? (
          <RxHamburgerMenu onClick={() => setIsActive((prev) => !prev)} className={actionBtn} />
        ) : (
          <RxCross2 onClick={() => setIsActive((prev) => !prev)} className={actionBtn} />
        )}
        {children}
      </div>
    </>
  );
};
