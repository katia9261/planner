import React from 'react'
import styles from './NavTasks.module.css'
import cn from 'classnames'

export default function NavTasks() {
  return (
    <div className={styles.navTasks}>
      <div className={cn(styles.today, styles.active)}>
        Today
      </div>
      <div className={styles.myTasks}>
        My tasks
      </div>
    </div>
  )
}
