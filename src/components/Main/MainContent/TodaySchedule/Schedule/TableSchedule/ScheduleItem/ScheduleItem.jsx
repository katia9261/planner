import React, { useRef, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import styles from "./ScheduleItem.css";
import cn from "classnames";
import Tag from "../../Tag/Tag";
import { remove, ref, update } from "firebase/database";
import { auth, db } from "../../../../../../../firebase";
import { uid } from "uid";

export default function ScheduleItem(todo) {
  const [value, setCheckbox] = useState(todo.status);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setNameTodo] = useState("");
  const [time, setTimeTodo] = useState("");
  const [tags, setTagsTodo] = useState("");
  const [description, setDescriptionTodo] = useState("");
  const [click, setClick] = useState(false);

  const inputRef = useRef(null);

  const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${todo.id}`));
  };

  const lalala = () => {
  }

  return (
    <div className={cn("scheduleItem")}>
      <Checkbox
        value={value}
        checked={value}
        onChange={({ target }) => setCheckbox(!value)}
      />
      {!click && (
        <label
          className={cn("scheduleItem__label")}
          htmlFor={`checkbox-${todo.id}`}
          onClick={() => setClick(true)}
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
              setClick(false)
              setNameTodo(inputRef.current.value)
              {/*setTempUidd(todo.id)*/}
              update(ref(db, `/${auth.currentUser.uid}/${todo.id}`), {
                nameTodo: inputRef.current.value,
                timeTodo: todo.time,
                tagsTodo: todo.tags,
              },
              {merge: true});
            }
          }}
        />
      )}
      <div className={cn("scheduleItem__time")}>{todo.time}</div>
      <Tag tags={todo.tags} />
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}
