import React from 'react';
import styles from './Chip.module.scss';

const Chip = ({ content }) => {
  return <div className={styles.container}>{content}</div>;
};

export default Chip;
