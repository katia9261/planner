import React from 'react'
import styles from './HeaderSchedule.module.css'
import ItemsSchedule from './ItemsSchedule/ItemsSchedule'

export default function HeaderSchedule() {
  return (
    <div className={styles.headerSchedule}>
      <ItemsSchedule/>
    </div>
  )
}
