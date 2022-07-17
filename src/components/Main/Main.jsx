import React from 'react'
import styles from './Main.module.css'
import MainContent from './MainContent/MainContent'


export default function Main() {
  return (
    <div className={styles.main}>
        <MainContent/>
    </div>
  )
}
