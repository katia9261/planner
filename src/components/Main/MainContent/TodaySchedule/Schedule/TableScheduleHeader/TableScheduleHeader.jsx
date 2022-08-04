import React, {useState} from 'react';
import styles from './TableScheduleHeader.module.css';
import Checkbox from '../Checkbox/Checkbox';

export default function TableScheduleHeader() {
  const columnNames = {
    nameTask: 'Name task',
    time: 'Time',
    tags: 'Tags',
		status: false,
  };

	const [value, setCheckbox] = useState(columnNames.status);

  return (
    <div className={styles.headerSchedule}>
      <div className={styles.itemsSchedule}>
        {/*<CheckBox id={`header-checkbox-${columnNames.nameTask}`} status={columnNames.status} />*/}
        <Checkbox
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
          style={{backgroundColor: '#6d6d6d', border: 'none'}}
      />
				<label
          className={styles.itemsSchedule__label}
          htmlFor={`header-checkbox-${columnNames.nameTask}`}
        >
          {columnNames.nameTask}
        </label>
        <div className={styles.itemsSchedule__time}>{columnNames.time}</div>
        <div className={styles.itemsSchedule__tags}>{columnNames.tags}</div>
        <button disabled className={styles.itemsSchedule__delete}>delete</button>
      </div>
    </div>
  );
}
