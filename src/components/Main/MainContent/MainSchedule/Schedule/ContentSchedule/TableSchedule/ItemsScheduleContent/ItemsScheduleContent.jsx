import React from 'react'
import styles from './ItemsScheduleContent.module.css'
import NameTaskContent from './NameTaskContent/NameTaskContent'
import TimeContent from './TimeContent/TimeContent'
import TagsContent from './TagsContent/TagsContent'

export default function ItemsScheduleContent() {
  return (
    <div className={styles.itemsScheduleContent}>
      <NameTaskContent/>
      <TimeContent/>
      <TagsContent/>
    </div>
  )
}
