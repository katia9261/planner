import React from "react";
import styles from'./NavSettings.module.css'
import {signOut} from 'firebase/auth'
import {auth} from '../../../firebase.js'
import { useNavigate } from "react-router-dom";


export default function NavSettings() {
  const navigate = useNavigate();
  const handleSignOut = () => {

    signOut(auth)
    .then(() => {
      navigate('/')
    })
    .catch((err) => {alert(err.message)});
  };

  return (
    <div className={styles.navSettings}>
      <div className={styles.navTrashSet}>
        <div className={styles.settings}>Settings</div>
      </div>
        <button className={styles.login} onClick={handleSignOut}>Log out</button>
    </div>
  );
}
