import React from 'react'
import styles from './Logun.module.css'
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        navigate('/planner')
      }
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate('/planner')
    }).catch((err) => alert(err.message));
  }

  const handleRegister = () => {
    {/*checking a valid pass*/}
    if(registerInfo.password !== registerInfo.confirmPassword) {
      alert('Your passwords are not the same')
      return;
    }

    createUserWithEmailAndPassword(auth, registerInfo.email, registerInfo.password)
    .then(() => {
      navigate('/planner')
    })
    .catch((err) => alert(err.message));
  }

  return (
    <div className={styles.loginForm}>
      <h3>Welcome to ideal planner</h3>
      <div className={styles.LoginRegisterContainer}>
        {isRegistering ? (
          <>
            <input 
              type='email' 
              placeholder='Email' 
              value={registerInfo.email}
              onChange = {(e) => setRegisterInfo({...registerInfo, email: e.target.value})}
            />
            <input 
              type='password' 
              placeholder='password'
              value={registerInfo.password}
              onChange = {(e) => setRegisterInfo({...registerInfo, password: e.target.value})}
            />
            <input 
              type='password' 
              placeholder='Confirm password' 
              value={registerInfo.confirmPassword}
              onChange = {(e) => setRegisterInfo({...registerInfo, confirmPassword: e.target.value})}
            />
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => setIsRegistering(false)}>
              Go back
            </button>
          </>
        ) : (
          <>
            <input type='email' onChange={handleEmailChange} value={email}/>
            <input 
              type='password' 
              onChange={handlePasswordChange} 
              value={password}
            />
            <button onClick={handleSignIn}>Sign up</button>
            <button onClick={() => setIsRegistering(true)}>
              Create an account
            </button>
      </>
        )}
      </div>
    </div>
  )
}
