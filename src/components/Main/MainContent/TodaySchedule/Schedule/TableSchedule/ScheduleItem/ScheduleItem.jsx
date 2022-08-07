import React, { useRef, useState, useEffect } from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import styles from './ScheduleItem.css';
import cn from 'classnames';
import Tag from '../../Tag/Tag';
import { remove, ref, update } from 'firebase/database';
import { auth, db } from '../../../../../../../firebase';
import { uid } from 'uid';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 10px;
  align-items: center;
  vertical-align: middle;

  @media (max-width: 768px) {
    margin: 2px 10px;
		justify-content: space-around;
  }

  opacity: ${(props) => (props.isDone ? 0.5 : 1)};
`;

const Label = styled.label`
  flex-basis: 3;
  width: 35%;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};

	@media (max-width: 768px) {
		flex-basis: 2;
		width: 20%;
	}
`;

const SheduleTime = styled.div`
	flex-basis: 2;
	width: 20%;
	text-align: center;
	font-size: 16px;

	@media (max-width: 768px) {
		font-size: 14px;
		flex-basis: 1;
	}
`;

const DeleteButton = styled.button`
		border: none;
  background-color: #8541f6;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  font-size: 16px;
  width: 10%;
	margin-left: 5px;

	@media (max-width: 768px) {
		font-size: 14px;
		width: auto;
	}
`;

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
    <div
      className={cn('scheduleItemContainer', todo.status && 'opacity')}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Item isDone={todo.status}>
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
          <Label
            isDone={todo.status}
            htmlFor={`checkbox-${todo.id}`}
            onClick={() => setClick(true)}
            checkIfClickedOutside={() => setClick(false)}
          >
            {todo.name}
          </Label>
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
        <DeleteButton onClick={() => handleDelete(todo.id)}>
          Delete
        </DeleteButton>
      </Item>
      {isHover && (
        <div
          className={cn(
            'scheduleItem__description',
            todo.status && 'scheduleItem__description_done'
          )}
        >
          {todo.description}
        </div>
      )}
    </div>
  );
}
