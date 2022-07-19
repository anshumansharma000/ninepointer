import React, { useEffect } from 'react';
import styles from './PyqModal.module.scss';

const PyqModal = ({ link, setShowModal }) => {
  let url = '';
  let pdf = link;
  if (link[8] == 'd') {
    if (pdf.includes('/view')) {
      url = pdf.replace('/view', '/preview');
    } else if (pdf.includes('/edit')) {
      url = pdf.replace('/edit', '/preview');
    }
  } else {
    url = link;
  }
  console.log(url);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        setShowModal(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        setShowModal(false);
      }}
      onKeyDown={(e) => {
        if (e.code === 'Escape') {
          setShowModal(false);
        }
      }}
    >
      <div className={styles.container}>
        <iframe src={url} width='680' height='640' allow='autoplay'></iframe>
      </div>
      <p>X</p>
    </div>
  );
};

export default PyqModal;
