import React from 'react'
import styles from './NameTaskContent.module.css'
import Input from './Input/Input';
import NameTask from './NameTask/NameTask';

export default function NameTaskContent() {
  return (
    <div className={styles.nameTaskContent}>
      <Input/> 
      <NameTask/>
    </div>
  )
}
