import React from 'react';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import styles from './TableSchedule.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { auth, db } from './../../../../../../firebase';
import { uid } from "uid";
import styled from 'styled-components';

const TableScheduleContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  margin: 10px 10px 0 10px;
  border-radius: 15px 15px 0 0;

	@media (max-width: 768px) {
		width: 100%;
		margin: 0;
	}
`;

export default function TableSchedule() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    onValue(ref(db, `/${auth.currentUser.uid}/todos/`), (snaphot) => {
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
    <TableScheduleContainer>
      {todos.map((todo) => (
        <ScheduleItem
          key={`todo-${todo.uidd}`}
          id={todo.uidd}
          name={todo.nameTodo}
          time={todo.timeTodo.date}
          status={todo.statusTodo}
					description={todo.descriptionTodo}
					tags={todo.tagsTodo}
        />
      ))}
    </TableScheduleContainer>
  );
}
