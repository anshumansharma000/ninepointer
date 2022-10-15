import React from 'react';
import styles from './TopBar.module.scss';
import { NotificationsNone, Settings, Logout } from '@mui/icons-material';
import { useRouter } from 'next/router';

const TopBar = () => {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    router.replace('/');
  };

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
            <Logout onClick={logOut} />
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
