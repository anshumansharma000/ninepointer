import React from 'react';
import styles from '../styles/LinkButton.module.scss';

const LinkButton = ({ color, link, text, width = '70%' }) => {
  return (
    <div className={styles.container}>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        style={{ width: '100%' }}
      >
        <button style={{ width: '100%', backgroundColor: color }}>
          <strong>{text}</strong>
        </button>
      </a>
    </div>
  );
};

export default LinkButton;
