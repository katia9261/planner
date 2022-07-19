import React from 'react'
import styles from './CustomIput.module.css'
import styled from 'styled-components'


const CustomInput = (props) => {
  
  const Input = styled.input.attrs({ 
    type: 'text',
  })` 
    background: transparent;
    font-size: 16px;
    color: #000;
    width: 80%;
    outline: none;
    border: none;
    border-bottom: 1.25px solid  #6d6d6d;
  }
  `
  return (
    <div className={styles.container}>
        <Input type="text" placeholder={props.nameItem.value} />
          {/*<input type="text" />*/}
    </div>
  )
}

export default CustomInput;