import styles from './index.module.scss';
import { ILoaderProps } from './types';
const { loading, lds__ring } = styles;
export const Loader = ({ className }: ILoaderProps) => {
  return (
    <div className={className}>
      <div className={loading}>
        <div className={lds__ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
