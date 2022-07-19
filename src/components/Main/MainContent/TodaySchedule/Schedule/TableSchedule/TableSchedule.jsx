import React from 'react';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import styles from './TableSchedule.module.css';

export default function TableSchedule() {
  const todos = [
    {
      id: 0,
      name: 'French lesson',
      time: '08:00-09:00',
      status: false,
      tags: 'person',
    },
    {
      id: 1,
      name: 'Work call',
      time: '09:00-11:00',
      status: false,
      tags: 'work',
    },
    {
      id: 2,
      name: 'Finish the project',
      time: '15:00-18:00',
      status: false,
      tags: 'work',
    },
    {
      id: 3,
      name: 'Call to parents',
      time: '1 hour',
      status: false,
      tags: 'person',
    },
    {
      id: 4,
      name: 'Cleaning room',
      time: '3 hours',
      status: false,
      tags: 'person',
    },
    {
      id: 5,
      name: 'Go to a supermarket',
      time: '2 hours',
      status: true,
      tags: 'shopping',
    },
  ];

  return (
    <div className={styles.tableSchedule}>
      {todos.map((todo) => (
        <ScheduleItem
          key={'todo' + todos.id}
          id={todo.id}
          name={todo.name}
          time={todo.time}
          status={todo.status}
					tags={todo.tags}
        />
      ))}
    </div>
  );
}
