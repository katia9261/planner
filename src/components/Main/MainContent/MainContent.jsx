import React from 'react'
import Header from './Header/Header.jsx'
import styles from './MainContent.module.css'
import MainSchedule from './MainSchedule/MainSchedule.jsx';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <Header/>
      <MainSchedule/>
    </div>
  )
}
