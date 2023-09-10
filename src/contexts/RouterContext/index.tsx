'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useCallback, useContext } from 'react';
import { IRouterContext, IRouterContextProviderProps } from './types';

const RouterContext = createContext<IRouterContext | null>(null);

export const RouterContextProvider = ({ children }: IRouterContextProviderProps) => {
  const router = useRouter();

  const navigateToSummary = useCallback(() => {
    router.push('/summary');
  }, [router]);

  return (
    <RouterContext.Provider value={{ router, navigateToSummary }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouterContext = () => {
  const routerContext = useContext(RouterContext);
  if (routerContext === null) throw new Error('Router context is null');

  return routerContext;
};
