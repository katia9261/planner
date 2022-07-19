import React from 'react'
import Calendar from '../Calendar/Calendar.jsx';
import Header from './Header/Header.jsx'
import styles from './MainContent.module.css'
import TodaySchedule from './TodaySchedule/TodaySchedule.jsx';

export default function MainContent() {
  const showH = true;
  return (
    <div className={styles.mainContent}>
      {showH && <Header/>}
      <Calendar/>
      <TodaySchedule/>
    </div>
  )
}
