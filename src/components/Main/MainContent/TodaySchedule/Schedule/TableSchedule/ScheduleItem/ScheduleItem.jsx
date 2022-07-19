import React, { useState } from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import styles from './ScheduleItem.css';
import cn from 'classnames';
import Tag from '../../Tag/Tag';

export default function ScheduleItem({ id, name, time, status, tags }) {
  const [value, setCheckbox] = useState(status);
  return (
    <div className={cn('scheduleItem')}>
      <Checkbox value={value} checked={value} onChange={({ target }) => setCheckbox(!value)} />
      <label className={cn('scheduleItem__label')} htmlFor={`checkbox-${id}`}>
        {name}
      </label>
      <div className={cn('scheduleItem__time')}>{time}</div>
      <Tag tags={tags} />
    </div>
  );
}
