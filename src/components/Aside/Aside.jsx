import React from "react";
import styles from "./Aside.module.css";
import avatar from "../../assets/avatar.jpg";
import { useNavigate } from 'react-router-dom';
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase.js'

export default function Aside() {

  {/*Log out*/}
  const navigate = useNavigate();
  const handleSignOut = () => {

    signOut(auth)
    .then(() => {
      navigate('/')
    })
    .catch((err) => {alert(err.message)});
  };


  return (
    <div className={styles.aside}>
      <div className={styles.avatarInfo}>
        <div className={styles.avatarImg}>
          <img src={avatar} alt="avatarImg" />
        </div>
        <div className={styles.userName}>userName</div>
      </div>

      <div className={styles.navTasks}>
        <div className={(styles.today, styles.active)}>Today</div>
        <div className={styles.myTasks}>My tasks</div>
        <div className={styles.deferredTasks}>Deferred Tasks</div>
      </div>

      <div className={styles.navSettings}>
        <div className={styles.navTrashSet}>
          <div className={styles.trash}>Trash</div>
          <div className={styles.settings}>Settings</div>
        </div>
        <div className={styles.login} onClick={handleSignOut}>Log out</div>
      </div>
    </div>
  );
}
