import React from 'react'
import styles from './Inputs.module.css'
import CustomInput from './CustomInput/CustomInput'
import ButtonAddTask from '../ButtonAddTask/ButtonAddTask'
import { useState } from 'react'
import { uid } from "uid";
import { auth, db } from '../../../../../../firebase';
import {set, ref} from 'firebase/database'


export default function Inputs() {
  const [toDo, setToDo] = useState('')

  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      toDo: toDo,
      uidd: uidd,
    });
    setToDo('');
  }

  return (
    <div className={styles.inputs}>   
      <CustomInput name={'Task Name'} onChange={(e) => setToDo(e.target.value)}/>
      <CustomInput name={'Time'} onChange={(e) => setToDo(e.target.value)}/>
      <CustomInput name={'Tags'} onChange={(e) => setToDo(e.target.value)}/>
      <CustomInput name={'Description'} onChange={(e) => setToDo(e.target.value)}/>
      <ButtonAddTask />
    </div>
  )
}
