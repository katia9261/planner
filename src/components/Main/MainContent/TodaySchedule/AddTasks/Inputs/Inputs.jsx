import React from 'react'
import styles from './Inputs.module.css'
import NameTask from './NameTask/NameTask'
import Time from './Time/Time'
import Priority from './Priority/Priority'
import Description from './Description/Description'

export default function Inputs() {
  return (
    <div className={styles.inputs}>      
    <NameTask/>
    <Time/>
    <Priority/>
    <Description/></div>
  )
}
