import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import styles from './Time.module.css'

const Time = () => {
  return (
    <div className={styles.setTime}>
      <CustomInput/>
    </div>
  );
}

export default Time;
