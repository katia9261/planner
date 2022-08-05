import React, { useState, useEffect } from 'react';
import styles from './Aside.module.css';
import avatar from '../../assets/avatar.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { auth, db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';
import { uid } from 'uid';
import { Loader } from '../Loader/Loader';

export default function Aside() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [username, setusername] = useState('');
  useEffect(() => {
    onValue(ref(db, `/${auth.currentUser.uid}/userInfo`), (snaphot) => {
      setusername('');
      const data = snaphot.val();
      if (data !== null) {
        setusername(data.username);
      }
    });
  }, []);

  return (
    <div className={styles.aside}>
      <div className={styles.avatarInfo}>
        <div className={styles.avatarImg}>
          <img src={avatar} alt="avatarImg" />
        </div>
        <div
          className={styles.userName}
        >
          {username ? username : <Loader />}
        </div>
      </div>

      <div className={styles.navTasks}>
        <Link to="today" className={(styles.today, styles.active)}>
          Today
        </Link>
        <Link to="month" className={styles.myTasks}>
          Month
        </Link>
      </div>

      <div className={styles.navSettings}>
        <div className={styles.navTrashSet}>
          <div className={styles.trash}>Trash</div>
          <div className={styles.settings}>Settings</div>
        </div>
        <div className={styles.login} onClick={handleSignOut}>
          Log out
        </div>
      </div>
    </div>
  );
}
