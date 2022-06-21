import styles from '../styles/NumberCard.module.css';

const NumberCard = ({ number, text }) => {
  return (
    <div className={styles.container}>
      <h3
        style={{
          fontFamily: 'Bangers ,san-serif',
          fontWeight: 600,
          fontSize: '1.8rem',
        }}
      >
        {number}
      </h3>
      <h3>{text}</h3>
    </div>
  );
};

export default NumberCard;
