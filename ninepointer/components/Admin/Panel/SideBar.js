import React, { useState, useContext } from 'react';
import styles from './SideBar.module.scss';
import Link from 'next/link';
import { sideBarPageContext } from '../../../pages/_app';
import SideBarPageContext from '../../../context/SideBarPageContext';

const SideBar = () => {
  const [page, setPage] = useState();

  const { sideBarPage, setSideBarPage } = useContext(SideBarPageContext);

  return (
    <div className={styles.container}>
      <div className={styles.sideBarMenu}>
        <h3 className={styles.sideBarTitle}>{sideBarPage}</h3>
        <ul className={styles.sideBarList}>
          <Link href='/admin/panel/dashboard'>
            <li
              className={
                sideBarPage == 'dashboard'
                  ? `${styles.sideBarListItem} ${styles.active}`
                  : styles.sideBarListItem
              }
              onClick={() => setSideBarPage('dashboard')}
            >
              Home
            </li>
          </Link>
          <Link href='/admin/panel/pyqs'>
            <li
              className={
                sideBarPage == 'pyqs'
                  ? `${styles.sideBarListItem} ${styles.active}`
                  : styles.sideBarListItem
              }
              onClick={() => setSideBarPage('pyqs')}
            >
              Pyqs
            </li>
          </Link>
          <Link href='/admin/panel/videos'>
            <li
              className={
                sideBarPage == 'videos'
                  ? `${styles.sideBarListItem} ${styles.active}`
                  : styles.sideBarListItem
              }
              onClick={() => setSideBarPage('videos')}
            >
              Videos
            </li>
          </Link>
          <Link href='/admin/panel/users'>
            <li
              className={
                sideBarPage == 'users'
                  ? `${styles.sideBarListItem} ${styles.active}`
                  : styles.sideBarListItem
              }
              onClick={() => setSideBarPage('users')}
            >
              Users
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
