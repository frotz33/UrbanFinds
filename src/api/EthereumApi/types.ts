import { Dispatch } from 'react';

export interface ICheckTransatcionLoop {
  txhash: string | null;
  successSetter: Dispatch<React.SetStateAction<boolean>>;
}

export interface IRequestTransaction {
  to: string;
  from: string;
  value: string;
}
