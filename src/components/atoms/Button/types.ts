import { ReactElement } from 'react';

export interface IButtonProps {
  text?: string;
  className?: string;
  type: HTMLButtonElement['type'];
  icon?: ReactElement;
  onClick?: () => void;
}
