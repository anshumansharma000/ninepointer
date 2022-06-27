import React from 'react';
import styles from '../styles/TeamCard.module.scss';

const TeamCard = ({
  name,
  role,
  photo = 'assets/svg-assets/undraw_male_avatar_323b.svg',
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={photo} alt='photo' />
      </div>
      <div className={styles.text}>
        <h3>{name}</h3>
        <h4 style={{ color: '#0875F7' }}>{role}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
