import React from 'react'
import CustomInput from '../CustomInput/CustomInput'
import styles from './NameTask.module.css'

export default function NameTask() {
  return (
    <div className={styles.nameTask}>
      <CustomInput/>
    </div>
  )
}
