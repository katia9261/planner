import React from 'react'
import AvatarInfo from './AvatarInfo/AvatarInfo'
import NavTasks from './NavTasks/NavTasks'
import NavSettings from './NavSettings/NavSettings'
import styles from'./Aside.module.css'

export default function Aside() {
  return (
    <div className={styles.aside}>
        <AvatarInfo/>
        <NavTasks/>
        <NavSettings/>
    </div>
  )
}
