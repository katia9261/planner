import React from 'react'
import styles from './Main.module.css'
import MainContent from './MainContent/MainContent'
import Calendar from './Calendar/Calendar'
import ContextWrapper from './Calendar/Context/ContextWrapper';


export default function Main() {
  return (
    <ContextWrapper>
    <div className={styles.main}>
      <MainContent/>
      {/*<Calendar/>*/}
    </div>
    </ContextWrapper>
  )
}
