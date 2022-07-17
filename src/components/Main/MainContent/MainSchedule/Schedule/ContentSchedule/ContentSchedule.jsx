import React from 'react'
import styles from './ContentSchedule.module.css'
import HeaderSchedule from './HeaderSchedule/HeaderSchedule'
import TableSchedule from './TableSchedule/TableSchedule'

export default function ContentSchedule() {
  return (
    <div className={styles.contentSchedule}>
      <HeaderSchedule/>
      <TableSchedule/>
    </div>
  )
}
