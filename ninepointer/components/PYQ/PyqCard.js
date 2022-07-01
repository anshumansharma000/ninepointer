import React from 'react';
import styles from './PyqCard.module.scss';
const PyqCard = ({ pyq }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{pyq.subject}</h3>
        <h3>{pyq.year}</h3>
      </div>
      <a href={pyq.fileLink} rel='noopener noreferer' target='_blank'>
        <button>Download</button>
      </a>
    </div>
  );
};

export default PyqCard;
