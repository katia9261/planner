import React from 'react'
import styles from './ItemsSchedule.module.css'
import NameTask from './NameTask/NameTask'
import Tags from './TagsContent/Tags';
import Time from './Time/Time';

export default function ItemsSchedule() {
  return (
    <div className={styles.itemsSchedule}>
      <NameTask/>
      <Time/>
      <Tags/>
    </div>
  )
}
