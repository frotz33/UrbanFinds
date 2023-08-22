import { ICartProductProps } from '@/components/molecules/CartProduct/types';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: <ICartProductProps[]>[],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCartIndex: number = state.cart.findIndex(
        (item: ICartProductProps) => item.id === action.payload.id
      );
      const updatedCart = [...state.cart];
      if (itemInCartIndex !== -1) {
        updatedCart[itemInCartIndex] = {
          ...updatedCart[itemInCartIndex],
          quantity: updatedCart[itemInCartIndex].quantity + 1,
        };
        const updatedTotal = updatedCart.reduce((acc, currentValue) => {
          return (acc += currentValue.quantity);
        }, 0);
        return { cart: updatedCart, total: updatedTotal };
      }
      const updatedTotal = updatedCart.reduce((acc, currentValue) => {
        return (acc += currentValue.quantity);
      }, 0);
      return { cart: [...state.cart, { ...action.payload, quantity: 1 }], total: updatedTotal };
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
      if (itemIndex == -1) throw new Error('Item is missing');
      const updatedCart = [...state.cart];
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity + 1,
      };
      const updatedTotal = updatedCart.reduce((acc, currentValue) => {
        return (acc += currentValue.quantity);
      }, 0);
      return { cart: updatedCart, total: updatedTotal };
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
      if (itemIndex == -1) throw new Error('Item is missing');

      const updatedCart = [...state.cart];

      if (updatedCart[itemIndex].quantity === 1) {
        return { cart: state.cart, total: state.total };
      }
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity - 1,
      };
      const updatedTotal = updatedCart.reduce((acc, currentValue) => {
        return (acc += currentValue.quantity);
      }, 0);
      return { cart: updatedCart, total: updatedTotal };
    },
    removeItem: (state, action) => {
      const filteredItems = state.cart.filter((item) => item.id !== action.payload);
      const updatedTotal = filteredItems.reduce((acc, currentValue) => {
        return (acc += currentValue.quantity);
      }, 0);
      return { cart: filteredItems, total: updatedTotal };
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
