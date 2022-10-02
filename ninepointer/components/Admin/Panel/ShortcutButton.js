import React from 'react';
import styles from './ShortcutButton.module.scss';

const ShortcutButton = ({ text, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <h2>{text}</h2>
      <button>&gt;</button>
    </div>
  );
};

export default ShortcutButton;
