import React from 'react'
import styles from './AddTasks.module.css'
import ButtonAddTask from './ButtonAddTask/ButtonAddTask';
import Inputs from './Inputs/Inputs';

const AddTasks = () => {
  return (
    <div className={styles.addTasks}>
      <Inputs/>
      {/*<ButtonAddTask/>*/}
    </div>
  )
}

export default AddTasks;
