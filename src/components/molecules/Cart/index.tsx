'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartProduct } from '../CartProduct';
import { RootState } from '@/redux/cart/store';
import { ICartProductProps } from '../CartProduct/types';
import styles from './index.module.scss';
import { Total } from '@/components/atoms/Total';
import { CryptoWidget } from '../CryptoWidget';
const { cart__title, cart__wrapper } = styles;

const SELLER = '0x99a81c94C19C4263BC0f54B68Af6cA8127bCFB68';

export const Cart = () => {
  const [mounted, setMounted] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    setMounted(true);
  }, []);

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
          <Total total={total} />
        </>
      ) : (
        <></>
      )}
      <CryptoWidget price={total.totalPrice} seller={SELLER} />
    </>
  );
};
