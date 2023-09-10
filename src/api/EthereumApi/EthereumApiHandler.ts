import { Dispatch } from 'react';
import { ICheckTransatcionLoop, IRequestTransaction } from './types';

export class EthereumApiHandler {
  static connectAccount = async (accountSetter: Dispatch<React.SetStateAction<string>>) => {
    try {
      if (!window.ethereum) return;

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const [account] = accounts as string[];
      accountSetter(account);
    } catch (error) {
      console.error(error);
    }
  };

  static checkTransactionLoop = async ({
    txhash,
    successSetter,
  }: ICheckTransatcionLoop): Promise<void> => {
    try {
      if (!window.ethereum) return;
      const receipt = await window.ethereum.request({
        method: 'eth_getTransactionReceipt',
        params: [txhash],
      });
      if (receipt) {
        successSetter(true);
        return;
      }
      return EthereumApiHandler.checkTransactionLoop({ txhash, successSetter });
    } catch (error) {
      console.error(error);
    }
  };

  static requestTransaction = async (transactionParams: IRequestTransaction) => {
    try {
      if (!window.ethereum) return;
      const txhash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParams],
      });
      return txhash;
    } catch (error) {
      console.error(error);
    }
  };
}
