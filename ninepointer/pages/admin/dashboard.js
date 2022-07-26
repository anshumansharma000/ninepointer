import React, { useState } from 'react';
import Pyqs from '../../components/Admin/Dashboard/Pyqs';
import Videos from '../../components/Admin/Dashboard/Videos';
import Sidebar from '../../components/Admin/Dashboard/Sidebar';
import styles from './dashboard.module.scss';

const dashboard = () => {
  const [view, setView] = useState('pyqs');

  if (view == 'pyqs') {
    return (
      <div className={styles.container}>
        <Sidebar setView={setView} />
        <main>
          <div>
            <Pyqs />
          </div>
        </main>
      </div>
    );
  } else if (view == 'videos') {
    return (
      <div className={styles.container}>
        <Sidebar setView={setView} />
        <main>
          <div>
            <Videos />
          </div>
        </main>
      </div>
    );
  }
};

export default dashboard;
