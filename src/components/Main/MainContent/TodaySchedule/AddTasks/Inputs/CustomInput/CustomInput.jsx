import React from 'react'
import styles from './CustomIput.module.css'
import styled from 'styled-components'


export default function CustomInput({name}) {
  
  const Input = styled.input.attrs({ 
    type: 'text',
  })` 
    background: transparent;
    font-size: 20px;
    color: #000;
    width: 80%;
    outline: none;
    border: none;
    border-bottom: 1.25px solid  #6d6d6d;
  `

  return (
    <div className={styles.container}>

        <Input 
        type="text" 
        placeholder={name} 
        id={name} 
        value={name}
        />

    </div>
  )
}
