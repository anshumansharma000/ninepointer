import React from 'react';
import styles from './Youtube.module.scss';
import ReactPlayer from 'react-player';
const Youtube = ({ url }) => {
  return (
    <div className={styles.container}>
      <ReactPlayer
        url={url}
        // playing={true}
        // width='60%'
        controls={true}
        wrapper='container'
      />
    </div>
  );
};

export default Youtube;
