import React from 'react'
import styles from './TodaySchedule.module.css'
import AddTasks from './AddTasks/AddTasks.jsx'
import Schedule from './Schedule/Schedule.jsx'

export default function MainSchedule() {
  return (
    <div className={styles.mainSchedule}>
      <Schedule/>
      <AddTasks/>
    </div>
  )
}
