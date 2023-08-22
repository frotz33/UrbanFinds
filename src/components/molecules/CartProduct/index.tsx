/* eslint-disable @next/next/no-img-element */
'use client';
import { incrementQuantity, decrementQuantity, removeItem } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { ICartProductProps } from './types';
import Link from 'next/link';
const {
  cartProduct,
  cartProduct__btn,
  cartProduct__image,
  cartProduct__info,
  cartProduct__title,
  cartProduct__price,
  cartProduct__incrDec,
  cartProduct__removeButton,
  cartProduct__quantity,
  cartProduct__imageWrapper,
} = styles;

export const CartProduct = ({ id, image, title, price, quantity = 0 }: ICartProductProps) => {
  const dispatch = useDispatch();
  return (
    <div className={cartProduct}>
      <Link href={`/product/${id}`} className={cartProduct__imageWrapper}>
        <div>
          <img className={cartProduct__image} src={image} alt="item" />
        </div>
      </Link>
      <div className={cartProduct__info}>
        <p className={cartProduct__title}>{title}</p>
        <p className={cartProduct__price}>
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
        <div className={cartProduct__incrDec}>
          <button className={cartProduct__btn} onClick={() => dispatch(decrementQuantity(id))}>
            -
          </button>
          <p className={cartProduct__quantity}>{quantity}</p>
          <button className={cartProduct__btn} onClick={() => dispatch(incrementQuantity(id))}>
            +
          </button>
        </div>
        <button className={cartProduct__removeButton} onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
    </div>
  );
};
