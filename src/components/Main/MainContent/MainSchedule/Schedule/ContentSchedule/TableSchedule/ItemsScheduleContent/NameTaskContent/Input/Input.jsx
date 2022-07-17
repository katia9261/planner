import React from 'react'
import styles from './Input.module.css'

export default function Input() {
  return (
    <div className={styles.formGroup}>
      <input type="checkbox" id="cheking"/>
      <label for="cheking"></label>
    </div>
  )
}
