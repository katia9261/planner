import React from 'react';
import styles from './Schedule.module.css';
import TableScheduleHeader from './TableScheduleHeader/TableScheduleHeader';
import TableSchedule from './TableSchedule/TableSchedule';

export default function Schedule() {
  return (
    <div className={styles.schedule}>
      <div className={styles.contentSchedule}>
        <TableScheduleHeader />
        <TableSchedule />
      </div>
    </div>
  );
}
