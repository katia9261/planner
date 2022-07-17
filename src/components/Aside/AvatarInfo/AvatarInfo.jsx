import React from 'react'
import styles from './AvatarInfo.module.css'
import avatar from '../../../assets/avatar.jpg'

export default function AvatarInfo() {
  return (
    <div className={styles.avatarInfo}>
      <div className={styles.avatarImg}>
        <img src={avatar} alt="avatarImg" />
      </div>
      <div className={styles.userName}>
        userName
      </div>
    </div>
  )
}
