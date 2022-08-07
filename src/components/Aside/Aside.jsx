import React, { useState, useEffect } from 'react';
import styles from './Aside.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { auth, db } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';
import { uid } from 'uid';
import { Loader } from '../Loader/Loader';
import styled from 'styled-components';
import Avatar from 'avataaars';

const AsideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 100vh;
  background-color: #edf0f7;
  font-size: 25px;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    font-size: 14px !important;
    height: 30px;
    width: 100%;
    justify-content: space-around;
    margin: 0;
  }
`;

const Avataaar = styled.img`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 20%;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
    width: 30px;
    height: 30px;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 20%;
  margin-left: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
    flex-direction: row;
  }
`;

const Linked = styled(Link)`
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:active,
  &:hover {
    color: #8541f6;
  }

  margin: ${(props) => props.margin};

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const NavTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 30%;
  margin: 20px 0 20px 20px;

  @media (max-width: 768px) {
    margin: 0;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;

const NavSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 20%;
  margin-left: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 0;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;

const LogOut = styled.a`
  color: #8541f6;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
  }
`;

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
	const [avatar, setavatar] = useState({});

  useEffect(() => {
    onValue(ref(db, `/${auth.currentUser.uid}/userInfo`), (snaphot) => {
      setusername('');
      const data = snaphot.val();
      if (data !== null) {
        setusername(data.username);
				setavatar();
				setavatar(avatardb => ({
					...avatardb,
					...data.useravatar
				}));
				console.log(data.useravatar);
				console.log(avatar.topType);
      }
    });
  }, []);

  return (
    <AsideContainer>
      <AvatarContainer>
        <Avatar
          style={{ width: '100%', height: '100%', marginBottom: '10px' }}
          avatarStyle="Circle"
          topType={avatar.topStyles}
          accessoriesType={avatar.accessoriesTypes}
          facialHairType={avatar.facialHairTypes}
					hairColor={avatar.hairColor}
          clotheType={avatar.clotheTypes}
          clotheColor={avatar.clotheColors}
          eyeType={avatar.eyeTypes}
          eyebrowType={avatar.eyebrowTypes}
          mouthType={avatar.mouthTypes}
          skinColor={avatar.skinColors}
        />
        <div className={styles.userName}>{username ? username : <Loader />}</div>
      </AvatarContainer>
      <NavTasks>
        <Linked to="today" margin={'10px 0'}>
          Today
        </Linked>
        <Linked to="month" margin={'10px 0'}>
          Month
        </Linked>
      </NavTasks>
      <NavSettings>
        <Linked to="settings" margin={'10px 0'}>
          Settings
        </Linked>
        <LogOut onClick={handleSignOut}>Log out</LogOut>
      </NavSettings>
    </AsideContainer>
  );
}
