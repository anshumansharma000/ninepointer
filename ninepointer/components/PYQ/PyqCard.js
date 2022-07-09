import React from 'react';
import styles from './PyqCard.module.scss';
import Chip from './Chip/Chip';
const PyqCard = ({ pyq }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{pyq.subject}</h3>
        <h3>{pyq.year}</h3>
      </div>
      <div className={styles.chips}>
        <Chip content={pyq.branch} />
        <Chip content={`Sem ${pyq.semester}`} />
        <Chip content={pyq.year} />
        <Chip content={pyq.type} />
      </div>
      <div className={styles.action}>
        <a href={pyq.fileLink} rel='noopener noreferer' target='_blank'>
          <button>Download</button>
        </a>
        <a
          href={
            pyq.solution
              ? pyq.solution
              : 'https://www.youtube.com/c/ninepointer'
          }
          rel='noopener noreferer'
          target='_blank'
        >
          <button className={styles.secondaryBtn}>Solutions</button>
        </a>
      </div>
    </div>
  );
};

export default PyqCard;
