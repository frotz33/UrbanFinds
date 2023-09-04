/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IProductTileProps } from './types';
import styles from './index.module.scss';
import { Button } from '@/components/atoms/Button';
import { BsCartPlusFill } from 'react-icons/bs';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartSlice';
import { cutDescription } from '@/utils';
import { Rating } from '@/components/atoms/Rating';

const {
  product,
  product__anchor,
  product__image,
  product__title,
  product__description,
  product__price,
  product__rating,
  product__wrapper,
  product__priceWrapper,
  btn,
  btn__white,
  product__ratingStars,
} = styles;

export const ProductTile = ({ productInfo }: IProductTileProps) => {
  const { id, image, title, description, rating, price } = productInfo;
  const dispatch = useDispatch();
  return (
    <div className={product}>
      <div className={product__wrapper}>
        <Link href={`/product/${id}`} className={product__anchor}>
          <img src={image} alt="product image" className={product__image} />
          <h2 className={product__title}>{title}</h2>
          <p className={product__description}>{cutDescription(description)}...</p>
          <div className={product__priceWrapper}>
            <p className={product__price}>${price.toFixed(2)}</p>
            <p className={product__rating}>
              Rating:
              <span>
                <Rating rating={rating.rate} className={product__ratingStars} />
              </span>
            </p>
          </div>
        </Link>
        <Button
          type="button"
          icon={<BsCartPlusFill />}
          text="Add To Cart"
          className={`${btn} ${btn__white}`}
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
    </div>
  );
};
