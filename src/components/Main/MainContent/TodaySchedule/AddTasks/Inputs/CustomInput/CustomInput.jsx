import React from 'react'
import styles from './CustomIput.module.css'
import styled from 'styled-components'
import { useState } from 'react'
import { uid } from "uid";
import { auth, db } from "../../../../../../../firebase";
import {set, ref} from 'firebase/database'
import ButtonAddTask from '../../ButtonAddTask/ButtonAddTask'


export default function CustomInput({name}) {
  
  {/*const [toDo, setToDo] = useState('')*/}
  const [toDo, setToDo] = useState('')
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
  `

  //adding the post

  {/*const writeToDatabase = () => {
    const uid = uid();
    set(ref(db, `${auth.currentUser.uid}/${uid}`), {
      toDo: toDo,
      uid: uid,
    });
    setToDo('')
  }*/}


  return (
    <div className={styles.container}>

        <Input 
        type="text" 
        placeholder={name} 
        id={name} 
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        />

    </div>
  )
}
