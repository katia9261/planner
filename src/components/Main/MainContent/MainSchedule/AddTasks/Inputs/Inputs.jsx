import React from 'react'
import CustomInput from '../CustomInput/CustomInput'
import styles from './Inputs.module.css'

export default function Description() {
  return (
    <div className={styles.items}>
      <CustomInput className={styles.name} nameItem={{value: 'Name task'}}/>
      <CustomInput nameItem={{value: 'Time'}}/>
      <CustomInput nameItem={{value: 'Priority'}}/>
      <CustomInput nameItem={{value: 'Description'}}/>
    </div>
  )
}
