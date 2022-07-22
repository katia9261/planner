import React from 'react'
import styles from './ButtonAddTask.module.css'

import { useState } from 'react'
import { uid } from "uid";
import { auth, db } from '../../../../../../firebase';
import {set, ref} from 'firebase/database'


export default function ButtonAddTask() {

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
    <form onSubmit={() => writeToDatabase}>
      <button type='submit' className={styles.buttonAddTask}>
        Add Task
      </button>
    </form>
  )
}
