import { RootState } from '@/redux/cart/store';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
const { total__price, total__value, total__name } = styles;
export const Total = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  const total = getTotal();
  return (
    <p className={total__price}>
      <span className={total__name}>Total</span> ({total.totalQuantity} items):
      <span className={total__value}> ${total.totalPrice.toFixed(2)}</span>
    </p>
  );
};
