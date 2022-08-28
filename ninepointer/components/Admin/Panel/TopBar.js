import React from 'react';
import styles from './TopBar.module.scss';
import { NotificationsNone, Settings } from '@mui/icons-material';

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src='/assets/svg-assets/ninepointer_logo.svg' alt='logo' />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.topBarIcons}>
          <div className={styles.topBarIcon}>
            <NotificationsNone />
          </div>
          <div className={styles.topBarIcon}>
            <Settings />
          </div>
        </div>
        <img
          className={styles.topAvatar}
          src='/assets/svg-assets/undraw_female_avatar_w3jk.svg '
          alt='avatar'
        />
      </div>
    </div>
  );
};

export default TopBar;
