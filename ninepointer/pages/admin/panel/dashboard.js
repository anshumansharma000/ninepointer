import React from 'react';
import TopBar from '../../../components/Admin/Panel/TopBar';
import SideBar from '../../../components/Admin/Panel/SideBar';
import styles from './dashboard.module.scss';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import ShortcutButton from '../../../components/Admin/Panel/ShortcutButton';

const dashboard = () => {
  const router = useRouter();
  // useEffect(() => {
  //   if (
  //     !localStorage.getItem('token') &&
  //     localStorage.getItem('role') !== 'admin'
  //   ) {
  //     router.push('/admin/login');
  //   }
  // }, []);
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.sections}>
        <SideBar />
        <div className={styles.pageContent}>
          <h1>Welcome ninepointer admin!</h1>
          <div className={styles.buttons}>
            <ShortcutButton
              text='Add user'
              onClick={() => {
                router.push('/admin/panel/users/upload');
              }}
            />
            <ShortcutButton
              text='Add pyq'
              onClick={() => {
                router.push('/admin/panel/pyqs/upload');
              }}
            />
            <ShortcutButton
              text='Add video'
              onClick={() => {
                router.push('/admin/panel/videos/upload');
              }}
            />
            <ShortcutButton text='Manage permissions' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
