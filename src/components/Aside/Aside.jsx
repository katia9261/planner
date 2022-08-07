import React, { useState, useEffect } from 'react';
import styles from './Aside.module.css';
import avatar from '../../assets/avatar.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { auth, db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';
import { uid } from 'uid';
import { Loader } from '../Loader/Loader';
import  styled  from 'styled-components';

const Linked = styled(Link)`
	text-decoration: none;
	color: #000;
	cursor: pointer;

	&:active, &:hover {
  color: #8541f6;
}
`

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
        <div className={styles.userName}>{username ? username : <Loader />}</div>
      </div>

      <div className={styles.navTasks}>
        <Linked to="today" className={(styles.today, styles.active)}>
          Today
        </Linked>
        <Linked to="month" className={styles.myTasks}>
          Month
        </Linked>
      </div>

      <div className={styles.navSettings}>
        <div className={styles.navTrashSet}>
          <Linked to="settings" className={styles.settings}>
            Settings
          </Linked>
        </div>
        <a className={styles.login} onClick={handleSignOut}>
          Log out
        </a>
      </div>
    </div>
  );
}
