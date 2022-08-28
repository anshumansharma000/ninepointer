import React from 'react';
import TopBar from '../../../components/Admin/Panel/TopBar';
import SideBar from '../../../components/Admin/Panel/SideBar';
import styles from './dashboard.module.scss';
const dashboard = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.sections}>
        <SideBar />
        <div className={styles.pageContent}>Page Content</div>
      </div>
    </div>
  );
};

export default dashboard;
