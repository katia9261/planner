import React from "react";
import styles from "./Logun.module.css";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase.js";
import { set, ref } from 'firebase/database';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
  const [registerInfo, setRegisterInfo] = useState({
		username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/planner/today");
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/planner/today");
      })
      .catch((err) => alert(err.message));
  };

	const writeToDatabaseUserInfo = (username, email) => {
    set(ref(db, `/${auth.currentUser.uid}/userInfo`), {
      username: username,
      useremail: email,
    });
  };

  const handleRegister = () => {
      /*checking a valid pass*/
    if (registerInfo.password !== registerInfo.confirmPassword) {
      alert("Your passwords are not the same");
      return;
    }

    const user = createUserWithEmailAndPassword(
      auth,
      registerInfo.email,
      registerInfo.password
    )
      .then(() => {
        navigate("/planner/today");
				writeToDatabaseUserInfo(registerInfo.username, registerInfo.email);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.LoginRegisterContainer}>
        {isRegistering ? (
          <>
            <h3>Welcome to ideal planner</h3>
						<input
              className={styles.registerInput}
              type="text"
              placeholder="Username"
              value={registerInfo.username}
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, username: e.target.value })
              }
            />
            <input
              className={styles.registerInput}
              type="email"
              placeholder="Email"
              value={registerInfo.email}
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, email: e.target.value })
              }
            />
            <input
              className={styles.registerInput}
              type="password"
              placeholder="Password"
              value={registerInfo.password}
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, password: e.target.value })
              }
            />
            <input
              className={styles.registerInput}
              type="password"
              placeholder="Confirm password"
              value={registerInfo.confirmPassword}
              onChange={(e) =>
                setRegisterInfo({
                  ...registerInfo,
                  confirmPassword: e.target.value,
                })
              }
            />
            <button className={styles.registerButton} onClick={handleRegister}>
              Register
            </button>
            <button
              className={styles.goBackButton}
              onClick={() => setIsRegistering(false)}
            >
              Go back
            </button>
          </>
        ) : (
          <div className={styles.SignUpRegisterContainer}>
            <>
            <h3>Welcome to ideal planner</h3>
              <input
                className={styles.signUpForm}
                type="Email"
                onChange={handleEmailChange}
                value={email}
                placeholder="email"
              />
              <input
                className={styles.signUpForm}
                type="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="Password"
              />
              <button className={styles.signUpButton} onClick={handleSignIn}>
                Sign up
              </button>
              <button
                className={styles.cleateAcc}
                onClick={() => setIsRegistering(true)}
              >
                Create an account
              </button>
            </>
          </div>
        )}
      </div>
    </div>
  );
}
