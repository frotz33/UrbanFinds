import { ICartProductProps } from '@/components/molecules/CartProduct/types';

interface IAction {
  state: {
    cart: ICartProductProps[];
    total: number;
  };
  action: {
    payload: any;
    type: string;
  };
}

export const addItem = ({ state, action }: IAction) => {
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
  const cart = [...state.cart, { ...action.payload, quantity: 1 }];
  const updatedTotal = cart.reduce((acc, currentValue) => {
    return (acc += currentValue.quantity);
  }, 0);
  return { cart: cart, total: updatedTotal };
};

export const incrementNumberOfItems = ({ state, action }: IAction) => {
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
};

export const decrementNumberOfItems = ({ state, action }: IAction) => {
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
};

export const removeProduct = ({ state, action }: IAction) => {
  const filteredItems = state.cart.filter((item) => item.id !== action.payload);
  const updatedTotal = filteredItems.reduce((acc, currentValue) => {
    return (acc += currentValue.quantity);
  }, 0);
  return { cart: filteredItems, total: updatedTotal };
};
