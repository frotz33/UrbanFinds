'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartProduct } from '../CartProduct';
import { RootState } from '@/redux/store';
import { ICartProductProps } from '../CartProduct/types';
import styles from './index.module.scss';
import { Total } from '@/components/atoms/Total';
const { cart__title, cart__wrapper } = styles;
export const Cart = () => {
  const [mounted, setMounted] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted ? (
        <>
          <div className={cart__wrapper}>
            <h3 className={cart__title}>Your Cart</h3>
            {cart?.map((item: ICartProductProps) => (
              <CartProduct
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
          <Total />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
