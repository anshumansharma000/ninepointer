import React from 'react';
import PyqCard from './PyqCard';
import styles from './PyqCards.module.scss';

const PyqCards = ({ pyqs }) => {
  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: 'center' }}>PYQs</h2>
      <div className={styles.cards}>
        {pyqs.map((pyq, index) => {
          return <PyqCard key={index} pyq={pyq} />;
        })}
      </div>
    </div>
  );
};

export default PyqCards;
