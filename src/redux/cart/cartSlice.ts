import { ICartProductProps } from '@/components/molecules/CartProduct/types';
import { createSlice } from '@reduxjs/toolkit';
import { addItem, decrementNumberOfItems, incrementNumberOfItems, removeProduct } from './actions';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: <ICartProductProps[]>[],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      return addItem({ state, action });
    },
    incrementQuantity: (state, action) => {
      return incrementNumberOfItems({ state, action });
    },
    decrementQuantity: (state, action) => {
      return decrementNumberOfItems({ state, action });
    },
    removeItem: (state, action) => {
      return removeProduct({ state, action });
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
