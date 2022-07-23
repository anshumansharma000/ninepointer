import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styles from './TeamCard.module.scss';

const TeamCard = ({
  name,
  role,
  photo = '/assets/svg-assets/undraw_male_avatar_323b.svg',
  description,
  twitter,
  linkedIn,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={photo} alt='photo' />
      </div>
      <div className={styles.text}>
        <h3>{name}</h3>
        <h4 style={{ color: '' }}>{role}</h4>
        <p>{description}</p>
        <div className={styles.socialLinks}>
          <a href={twitter} target='_blank' rel='noopener noreferrer'>
            <FaTwitter size={21} color='#033D29' />
          </a>
          <a href={linkedIn} target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn size={21} color='#033D29' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
