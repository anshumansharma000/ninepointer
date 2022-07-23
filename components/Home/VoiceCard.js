import styles from './VoiceCard.module.scss';
import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

const VoiceCard = ({
  photo,
  name,
  college,
  branch,
  year,
  rightPic,
  testimonial,
}) => {
  return (
    <div className={styles.container}>
      {rightPic ? (
        <>
          <div className={styles.content}>
            <ImQuotesLeft size={120} color='#033D29' />
            <div className={styles.text}>
              <p
                style={{
                  paddingTop: '4rem',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  marginBottom: '2rem',
                }}
              >
                {testimonial}
              </p>
              <h3 style={{ color: 'grey' }}>{name}</h3>
              <p style={{ color: 'grey' }}>
                {college}, {branch}
              </p>
            </div>
          </div>
          <div className={styles.photo}>
            <img src={photo} alt='' />
          </div>
        </>
      ) : (
        <>
          <div className={styles.photo}>
            <img src={photo} alt='' />
          </div>
          <div className={styles.content}>
            <ImQuotesLeft size={120} color='#033D29' />
            <div className={styles.text}>
              <p
                style={{
                  paddingTop: '4rem',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  marginBottom: '2rem',
                }}
              >
                {testimonial}
              </p>
              <h3 style={{ color: 'grey' }}>{name}</h3>
              <p style={{ color: 'grey' }}>
                {college}, {branch}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VoiceCard;
