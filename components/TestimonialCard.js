import React from 'react';
import styles from '../styles/TestimonialCard.module.scss';

const TestimonialCard = ({ name, sgpa, branch, college, testimonial }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src='assets/svg-assets/undraw_male_avatar_323b.svg' alt='photo' />
      </div>
      <h2>{name}</h2>
      <p style={{ color: '#3EC221', fontSize: '0.7rem' }}>
        <strong>
          {sgpa} SGPA, ({branch}) {college}{' '}
        </strong>
      </p>
      <p>{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
