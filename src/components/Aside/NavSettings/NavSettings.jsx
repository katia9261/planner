import React from "react";
import styles from'./NavSettings.module.css'

export default function NavSettings() {
  return (
    <div className={styles.navSettings}>
      <div className={styles.navTrashSet}>
        <div className={styles.trash}>Trash</div>
        <div className={styles.settings}>Settings</div>
      </div>
        <div className={styles.login}>Log out</div>
    </div>
  );
}
