import React from 'react';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import styles from './TableSchedule.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { auth, db } from './../../../../../../firebase';
import { uid } from "uid";

export default function TableSchedule() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    onValue(ref(db, `/${auth.currentUser.uid}`), (snaphot) => {
      setTodos([]);
      const data = snaphot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, [])

  return (
    <div className={styles.tableSchedule}>
      {todos.map((todo) => (
        <ScheduleItem
          key={`todo-${todo.uidd}`}
          id={todo.uidd}
          name={todo.nameTodo}
          time={todo.timeTodo}
          status={todo.statusTodo}
					tags={todo.tagsTodo}
        />
      ))}
    </div>
  );
}
