import React from 'react'
import styles from './ButtonAddTask.module.css'
import styled from 'styled-components'

export default function ButtonAddTask() {

  const MyButton = styled.button` 
    display: flex;
    flex-direction: column;
    background: #8541f6;
    font-size: 16px;
    color: #fff;
    width: 120px;
    height: 40px;
    border: 30px;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
  }
  `

  return (
    <div className={styles.buttonAddTask}>
      <MyButton className={styles.btn}>Add task</MyButton>
    </div>
  )
}
