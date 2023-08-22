import React from 'react';
import styles from './loading.module.scss';
const { loading, lds__ring } = styles;

const Loading = () => {
  return (
    <div className={loading}>
      <div className={lds__ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
