import React from 'react';
import styles from './VideoCard.module.scss';
import { FaPlay } from 'react-icons/fa';

const VideoCard = (props) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.thumbnail}>
        <a href={props.link} target='_blank'>
          <img src={props.img_src} className={styles.cardThumbnail} />
        </a>
      </div>
      <div className={styles.reference}>
        <h3 className={styles.cardTitle}>{props.cardTitle}</h3>
        <div className={styles.cardDescription}>{props.cardDescription}</div>
        <div className={styles.cardAuthor}>{props.cardAuthor}</div>
        <a href={props.link} target='_blank'>
          <button className={styles.button}>
            {' '}
            <FaPlay /> Watch now{' '}
          </button>
        </a>
      </div>
    </div>
  );
};
export default VideoCard;
