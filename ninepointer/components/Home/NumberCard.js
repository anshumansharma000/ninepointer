import styles from './NumberCard.module.scss';

const NumberCard = ({ number, text }) => {
  return (
    // <div className={styles.outer}>
    <div className={styles.container}>
      <h3
        style={{
          fontFamily: 'Bangers ,san-serif',
          fontWeight: 600,
        }}
      >
        {number}
      </h3>
      <h3>{text}</h3>
    </div>
    // </div>
  );
};

export default NumberCard;
