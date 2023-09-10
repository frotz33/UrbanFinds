import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { ReactNode } from 'react';

export interface IRouterContextProviderProps {
  children: ReactNode;
}

export interface IRouterContext {
  router: AppRouterInstance;
  navigateToSummary: () => void;
}
