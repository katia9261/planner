import React from 'react'
import Header from './Header/Header.jsx'
import styles from './MainContent.module.css'
import TodaySchedule from './TodaySchedule/TodaySchedule.jsx';

export default function MainContent() {

  return (
    <div className={styles.mainContent}>
      {<Header/>}
      {<TodaySchedule/>}
    </div>
  )
}
