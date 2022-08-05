import React, { useRef, useEffect, useState } from 'react';
import styles from './Inputs.module.css';
import CustomInput from './CustomInput/CustomInput';
import ButtonAddTask from '../ButtonAddTask/ButtonAddTask';
import { uid } from 'uid';
import { auth, db } from '../../../../../../firebase';
import { set, ref } from 'firebase/database';
import styled from 'styled-components';
import Checkbox from '../../Schedule/Checkbox/Checkbox';

const InputDate = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  font-size: 20px;
  color: #000;
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1.25px solid #6d6d6d;
`;

const AdvancedTimeOpts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 18px;
  width: 30%;
`;

export default function Inputs() {
  // set current date and time
  const date = new Date();
  date.setHours(date.getHours() + 1);
  const bufdate = new Date();
  bufdate.setHours(bufdate.getHours() + (bufdate.getTimezoneOffset() / 60) * -1 + 1);
  const defCurrentDate = bufdate.toISOString().slice(0, -8);
  const currentDate = date.toLocaleString('default', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
  });

  // set properties for inputs
  const [name, setNameTodo] = useState('');
  const [tags, setTagsTodo] = useState('');
  const [description, setDescriptionTodo] = useState('');

  // set properties for click on advanced options
  const [clickOnTimeOpts, setClickOnTimeOpts] = useState(false);
  const inputRef = useRef(null);

  // set properties for times
  const [time, setTimeTodo] = useState('');

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (clickOnTimeOpts && inputRef.current && !inputRef.current.contains(e.target)) {
        setClickOnTimeOpts(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [clickOnTimeOpts]);

  const writeToDatabase = (name, time, tags, description) => {
		let date = new Date(time);

    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/todos/${uidd}`), {
      nameTodo: name,
      timeTodo: {
				date: time,
				year: date.getFullYear(),
				month: date.getMonth(),
				day: date.getDate(),
				hour: date.getHours(),
				minute: date.getMinutes(),
			},
      tagsTodo: tags,
      descriptionTodo: description,
      statusTodo: false,
      uidd: uidd,
    });
    setNameTodo('');
    setTimeTodo(currentDate);
    setTagsTodo('');
    setDescriptionTodo('');
    setClickOnTimeOpts(false);
  };

  const handleChangeName = (e) => {
    setNameTodo(e.currentTarget.value);
  };

  const handleChangeTime = (e) => {
    if (!clickOnTimeOpts) {
      setTimeTodo(currentDate);
    } else {
      setTimeTodo(e.currentTarget.value);
    }
  };

  const handleChangeTags = (e) => {
    setTagsTodo(e.currentTarget.value);
  };

  const handleChangeDescription = (e) => {
    setDescriptionTodo(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    writeToDatabase(name, time, tags, description); /** */
    setNameTodo('');
    setTimeTodo('');
    setTagsTodo('');
    setDescriptionTodo('');
  };

  return (
    <form className={styles.inputs} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={name}
        type="text"
        onChange={handleChangeName}
        placeholder="Task Name"
      />
      <InputDate
        opts={clickOnTimeOpts}
        ref={inputRef}
        onClick={() => setClickOnTimeOpts(true)}
        onClickOutside={() => {
          setClickOnTimeOpts(false);
        }}
        style={{ color: '#6d6d6d' }}
      >
        {!clickOnTimeOpts ? (
          currentDate
        ) : (
          <input
            className={styles.input}
            style={{ width: 'auto', borderBottom: '0px solid #000' }}
            value={time ? time : currentDate}
            type="datetime-local"
            onChange={handleChangeTime}
          />
        )}
      </InputDate>
      <input
        className={styles.input}
        value={tags}
        type="text"
        onChange={handleChangeTags}
        placeholder="Tags"
      />
      <input
        className={styles.input}
        value={description}
        type="text"
        onChange={handleChangeDescription}
        placeholder="Description"
      />
      <ButtonAddTask />
    </form>
  );
}
