import React from 'react'
import ContentSchedule from './ContentSchedule/ContentSchedule';
import styles from './Schedule.module.css'

const Schedule = () => {
  return (
    <div className={styles.Schedule}>
      <ContentSchedule/>
    </div>
  )
}

export default Schedule;
