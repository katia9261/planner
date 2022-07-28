import React from 'react'
import styles from './Inputs.module.css'
import CustomInput from './CustomInput/CustomInput'
import ButtonAddTask from '../ButtonAddTask/ButtonAddTask'
import { useState } from 'react'
import { uid } from "uid";
import { auth, db } from '../../../../../../firebase';
import {set, ref} from 'firebase/database'


export default function Inputs() {
  {/*const [toDo, setToDo] = useState('')*/}
  const [name, setNameTodo] = useState('')
  const [time, setTimeTodo] = useState('')
  const [tags, setTagsTodo] = useState('')
  const [description, setDescriptionTodo] = useState('')

  

  const writeToDatabase = (name, time, tags, description) => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      nameTodo: name,
      timeTodo: time,
      tagsTodo: tags,
      descriptionTodo: description,
      uidd: uidd,
    });
    setNameTodo('');
    setTimeTodo('');
    setTagsTodo('');
    setDescriptionTodo('');
  }

  const handleChangeName = (e) => {
    setNameTodo(e.currentTarget.value);
  };

  const handleChangeTime = (e) => {
    setTimeTodo(e.currentTarget.value);
  };

  const handleChangeTags = (e) => {
    setTagsTodo(e.currentTarget.value);
  };

  const handleChangeDescription = (e) => {
    setDescriptionTodo(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    writeToDatabase(name, time, tags, description);
    setNameTodo('');
    setTimeTodo('');
    setTagsTodo('');
    setDescriptionTodo('');
  };

  return (
    <form className={styles.inputs} onSubmit={handleSubmit}>   
    {/*<input value={toDo} type="text" onChange={handleChange} placeholder="Task Name" />*/}
      <input value={name} type="text" onChange={handleChangeName} placeholder="Task Name" />
      <input value={time} type="time" onChange={handleChangeTime} placeholder="Time" />
      <input value={tags} type="text" onChange={handleChangeTags} placeholder="Tags" />
      <input value={description} type="text" onChange={handleChangeDescription} placeholder="Description" />
      <ButtonAddTask />
    </form>
  )
}
