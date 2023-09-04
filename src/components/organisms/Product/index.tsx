/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './index.module.scss';
import { BsCartPlusFill } from 'react-icons/bs';
import { Button } from '@/components/atoms/Button';
import { IProductProps } from './types';
import { Rating } from '@/components/atoms/Rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cart/cartSlice';
const {
  product,
  product__image,
  product__title,
  product__description,
  product__price,
  product__rating,
  product__addBtn,
  product__wrapper,
  product__priceWrapper,
  product__priceValue,
  product__ratingStars,
} = styles;
export const Product = ({ productInfo }: IProductProps) => {
  const { image, title, description, rating, price, id } = productInfo;
  const dispatch = useDispatch();
  return (
    <div className={product}>
      <div className={product__wrapper}>
        <img src={image} alt="product image" className={product__image} />
        <h2 className={product__title}>{title}</h2>
        <p className={product__description}>{description}</p>
      </div>
      <div className={product__priceWrapper}>
        <p className={product__rating}>
          <Rating rating={rating.rate} className={product__ratingStars} />
        </p>
        <p className={product__price}>
          Price: <span className={product__priceValue}>${price}</span>
        </p>
      </div>
      <Button
        type="button"
        icon={<BsCartPlusFill />}
        text="Add To Cart"
        className={product__addBtn}
        onClick={() =>
          dispatch(
            addToCart({
              id: id,
              title: title,
              image: image,
              price: price,
            })
          )
        }
      />
    </div>
  );
};
