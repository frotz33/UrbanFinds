/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { ICryptoWidget } from './types';
import { MetaMaskSDK } from '@metamask/sdk';
import { CoinBaseApiHandler } from '@/api/CoinBaseApi/CoinBaseApiHandler';
import { Button } from '@/components/atoms/Button';
import { useRouterContext } from '@/contexts/RouterContext';
import { EthereumApiHandler } from '@/api/EthereumApi/EthereumApiHandler';
import { countHexPrice } from '@/utils';
import { Loader } from '@/components/atoms/Loader';
import styles from './index.module.scss';
const {
  cryptoPayment,
  cryptoPayment__title,
  cryptoPayment__actionBtn,
  cryptoPayment__loader,
  cryptoPayment__actionBtn__icon,
} = styles;

export const CryptoWidget = ({ price, seller }: ICryptoWidget) => {
  const { navigateToSummary } = useRouterContext();
  const [account, setAccount] = useState('');
  const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);
  const [isWaitingForConfirm, setIsWaitingForConfirm] = useState(false);

  const handleAccountConnection = async (): Promise<void> => {
    try {
      await EthereumApiHandler.connectAccount(setAccount);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTransactionLoop = async (txhash: string | null): Promise<void> => {
    try {
      await EthereumApiHandler.checkTransactionLoop({
        txhash,
        successSetter: setIsTransactionSuccess,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = async () => {
    try {
      if (!window.ethereum) return;
      const exchangeRates = await CoinBaseApiHandler.getExchangeRates('USD');
      if (!exchangeRates) return;

      const ethRate = exchangeRates.ETH;
      const hexPrice = countHexPrice(price, ethRate);

      const transactionParams = {
        to: seller,
        from: account,
        value: hexPrice,
      };
      const txhash = await EthereumApiHandler.requestTransaction(transactionParams);

      setIsWaitingForConfirm(true);

      await handleTransactionLoop(txhash as string | null);
      if (isTransactionSuccess) {
        setIsWaitingForConfirm(false);
        navigateToSummary();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cryptoPayment}>
      <h2 className={cryptoPayment__title}>Pay with ETH</h2>
      <p>(MetaMask plugin needed!)</p>
      {isWaitingForConfirm ? (
        <Loader className={cryptoPayment__loader} />
      ) : account ? (
        <Button
          type="button"
          onClick={handlePayment}
          text="Pay With ETH"
          className={cryptoPayment__actionBtn}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
              alt="MetaMask logo"
              className={cryptoPayment__actionBtn__icon}
            />
          }
        />
      ) : (
        <Button
          type="button"
          onClick={handleAccountConnection}
          text="Connect to MetaMask"
          className={cryptoPayment__actionBtn}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
              alt="MetaMask logo"
              className={cryptoPayment__actionBtn__icon}
            />
          }
        />
      )}
    </div>
  );
};
