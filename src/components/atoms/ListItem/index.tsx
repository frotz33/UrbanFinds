import React from 'react';
import { IListItemProps } from './types';

export const ListItem = ({ children, className }: IListItemProps) => {
  return <li className={className}>{children}</li>;
};
