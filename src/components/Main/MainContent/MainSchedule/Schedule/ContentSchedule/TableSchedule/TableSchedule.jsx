import React from 'react'
import ItemsScheduleContent from './ItemsScheduleContent/ItemsScheduleContent'
import styles from './TableSchedule.module.css'

export default function TableSchedule() {
  return (
    <div className={styles.tableSchadule}>
      <ItemsScheduleContent/>
    </div>
  )
}
