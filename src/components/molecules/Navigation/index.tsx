'use client';
import { ListItem } from '@/components/atoms/ListItem';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { Hamburger } from '../Hamburger';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { IFetchedProduct } from '@/api/FakeStoreApi/types';
import { RootState } from '@/redux/cart/store';
import { useScrollDirection } from 'react-use-scroll-direction';
const {
  navigation,
  homeBtn,
  list,
  list__item,
  list__btn,
  hamburger__btn,
  hamburger__title,
  active,
  categories__list,
  categories__element,
  contact,
} = styles;

export const Navigation = ({ products }: { products: IFetchedProduct[] }) => {
  const categoriesWithDuplicates = products?.map((product) => product.category);

  const categories = [...new Set(categoriesWithDuplicates)];
  const total = useSelector((state: RootState) => state.total);
  const { isScrollingUp, isScrolling } = useScrollDirection();
  const [isActive, setIsActive] = useState(true);

  let oldTotal = useRef(total);
  useEffect(() => {
    if (oldTotal.current !== total) {
      setIsActive(true);
      oldTotal.current = total;
      return;
    }
    if (!isScrolling) return;
    if (isScrollingUp) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  }, [isScrollingUp, isScrolling, total]);

  return (
    <nav className={`${navigation} ${isActive ? active : ''}`}>
      <ul className={categories__list}>
        {categories.map((category, index) => {
          return (
            <Link href={`/categories/${category}`} key={index} className={categories__element}>
              {category}
            </Link>
          );
        })}
      </ul>
      <ul className={list}>
        <Link href="/" className={homeBtn}>
          UrbanFinds
        </Link>
        <Hamburger>
          <h2 className={hamburger__title}>Categories</h2>
          {categories.map((category, index) => {
            return (
              <Link href={`/categories/${category}`} key={index} className={hamburger__btn}>
                {category}
              </Link>
            );
          })}
          <h2>More</h2>
          <Link href="/contact" className={hamburger__btn}>
            Contact Us
          </Link>
        </Hamburger>
        <ListItem className={`${list__item} ${contact}`}>
          <Link href="/contact" className={list__btn}>
            Contact
          </Link>
        </ListItem>
        <ListItem className={list__item}>
          <Link href="/cart" className={list__btn}>
            <FaShoppingCart />
            {total}
          </Link>
        </ListItem>
      </ul>
    </nav>
  );
};
