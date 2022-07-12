import React from 'react';
import styles from './Youtube.module.scss';
import ReactPlayer from 'react-player';
const Youtube = () => {
  return (
    <div className={styles.container}>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=LB-vEM69w2w'
        // playing={true}
        // width='60%'
        controls={true}
        wrapper='container'
      />
    </div>
  );
};

export default Youtube;
