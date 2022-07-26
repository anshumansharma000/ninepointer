import React from 'react';
import styles from './PyqTile.module.scss';

const PyqTile = ({ pyq }) => {
  return (
    <div className={styles.container}>
      <span>{pyq.subject}</span> <span>{pyq.university}</span>{' '}
      <span>{pyq.semester}</span> <span>{pyq.year}</span> <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default PyqTile;
