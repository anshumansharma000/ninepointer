import React from 'react';
import SideBar from '../../../components/Admin/Panel/SideBar';
import styles from './videos.module.scss';
import TopBar from '../../../components/Admin/Panel/TopBar';

const videos = () => {
  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <div className={styles.sections}>
          <SideBar />
          <div className={styles.pageContent}>Video Content</div>
        </div>
      </div>
    </>
  );
};

export default videos;
