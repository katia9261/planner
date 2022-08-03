import React from 'react';
import styles from './Main.module.css';
import MainContent from './MainContent/MainContent';
import ContextWrapper from './MainContent/Calendar/Context/ContextWrapper';

export default function Main() {
  return (
    <ContextWrapper>
      <div className={styles.main}>
        <MainContent />
      </div>
    </ContextWrapper>
  );
}
