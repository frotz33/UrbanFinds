import React from 'react';
import styles from './index.module.scss';
import { ITotalProps } from './types';
const { total__price, total__value, total__name } = styles;
export const Total = ({ total }: ITotalProps) => {
  return (
    <p className={total__price}>
      <span className={total__name}>Total</span> ({total.totalQuantity} items):
      <span className={total__value}> ${total.totalPrice.toFixed(2)}</span>
    </p>
  );
};
