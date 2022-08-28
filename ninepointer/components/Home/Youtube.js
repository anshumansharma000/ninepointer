import React from 'react';
import styles from './Youtube.module.scss';
import ReactPlayer from 'react-player/lazy';
const Youtube = ({ url }) => {
  return (
    <div className={styles.container}>
      <ReactPlayer
        url={url}
        // playing={true}
        // width='60%'
        width='100%'
        height='100%'
        controls={true}
        wrapper='container'
        config={{
          youtube: { playerVars: { origin: 'https://www.youtube.com' } },
        }}
      />
    </div>
  );
};

export default Youtube;
