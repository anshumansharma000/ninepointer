import React from 'react';
import styles from './CreatorCard.module.scss';

const CreatorCard = ({ name, photo, college }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={photo} alt='' />
      </div>
      <div className={styles.content}>
        <h3>
          <strong>{name}</strong>
        </h3>
        <p>{college}</p>
      </div>
    </div>
  );
};

export default CreatorCard;
