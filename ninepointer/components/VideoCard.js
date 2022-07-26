import React from 'react';
import styles from '../styles/videoCard.module.scss';

const VideoCard = (props) => {
  return (
    <>
      <div className={styles.videoCards}>
        <div className={styles.videoCard}>
          <div className={styles.thumbnail}>
            <img src={props.img_src} className={styles.cardThumbnail} />
          </div>
          <div className={styles.reference}>
            <h3 className={styles.cardTitle}>{props.cardTitle}</h3>
            <br />
            <div className={styles.cardDescription}>
              {props.cardDescription}
            </div>
            <br />
            <span className={styles.cardAuthor}>{props.cardAuthor} </span>
            <br />
            <a href={props.link} target='_blank'>
              <br />
              <br />
              <br />
              <div className={styles.button}> Watch now </div>
            </a>
            <br />
          </div>{' '}
        </div>
      </div>
    </>
  );
};
export default VideoCard;
