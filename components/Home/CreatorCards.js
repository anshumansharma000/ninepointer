import React from 'react';
import CreatorCard from './CreatorCard';
import styles from './CreatorCards.module.scss';

const CreatorCards = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <CreatorCard
          name='Nirjhar Das'
          photo='/assets/images/creator_nirjhar.jpg'
          college='IIT Delhi'
        />
        <CreatorCard
          name='Utkarsh'
          photo='/assets/images/creator_utkarsh_bhardwaj.jpg'
          college='IIT Bombay'
        />
      </div>
      <div className={styles.elevated}>
        <CreatorCard
          name='Rushi Kale'
          photo='/assets/images/creator_rushi.jpeg'
          college='IIT Bombay'
        />
      </div>
    </div>
  );
};

export default CreatorCards;
