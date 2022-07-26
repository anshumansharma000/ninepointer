import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = ({ setView }) => {
  return (
    <div className={styles.container}>
      <ul>
        <li
          onClick={() => {
            setView('pyqs');
          }}
        >
          Pyqs
        </li>
        <li
          onClick={() => {
            setView('videos');
          }}
        >
          Videos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
