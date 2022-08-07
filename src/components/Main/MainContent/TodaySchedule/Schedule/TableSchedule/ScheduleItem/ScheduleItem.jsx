import React, { useRef, useState, useEffect } from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import styles from './ScheduleItem.css';
import cn from 'classnames';
import Tag from '../../Tag/Tag';
import { remove, ref, update } from 'firebase/database';
import { auth, db } from '../../../../../../../firebase';
import { uid } from 'uid';

export default function ScheduleItem(todo) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setNameTodo] = useState('');
  const [time, setTimeTodo] = useState('');
  const [tags, setTagsTodo] = useState('');
  const [description, setDescriptionTodo] = useState('');
  const [click, setClick] = useState(false);
	const [isHover, setIsHover] = useState(false);

  const [value, setCheckbox] = useState(todo.status);

  const inputRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (click && inputRef.current && !inputRef.current.contains(e.target)) {
        setClick(false);
        update(
          ref(db, `/${auth.currentUser.uid}/todos/${todo.id}`),
          {
            nameTodo: inputRef.current.value,
          },
          { merge: true }
        );
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [click]);

  const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/todos/${todo.id}`));
  };

  return (
    <div className={cn('scheduleItemContainer', todo.status && 'opacity')} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className={cn('scheduleItem', todo.status && 'opacity')}>
        <Checkbox
          checked={value}
          onChange={({ target }) => {
            setCheckbox(!value);
            update(
              ref(db, `/${auth.currentUser.uid}/todos/${todo.id}`),
              {
                statusTodo: !value,
              },
              { marge: true }
            );
          }}
        />
        {!click && (
          <label
            className={cn('scheduleItem__label', todo.status && 'schedule__label_done')}
            htmlFor={`checkbox-${todo.id}`}
            onClick={() => setClick(true)}
            checkIfClickedOutside={() => setClick(false)}
          >
            {todo.name}
          </label>
        )}
        {click && (
          <input
            defaultValue={todo.name}
            type="text"
            ref={inputRef}
            autoFocus
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setClick(false);
                setNameTodo(inputRef.current.value);
                {
                  /*setTempUidd(todo.id)*/
                }
                update(
                  ref(db, `/${auth.currentUser.uid}/todos/${todo.id}`),
                  {
                    nameTodo: inputRef.current.value,
                  },
                  { merge: true }
                );
              }
            }}
          />
        )}
        <div className={cn('scheduleItem__time')}>{todo.time}</div>
        <Tag tags={todo.tags} />
        <button className={cn('scheduleItem__delete')} onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
			{isHover && <div className={cn('scheduleItem__description', todo.status && 'scheduleItem__description_done')} >
				{todo.description}
			</div>}
    </div>
  );
}
