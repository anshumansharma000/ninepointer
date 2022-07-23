import styles from './MobileCard.module.scss';

const MobileCard = ({
  heading,
  cardText1,
  cardText2,
  actionText,
  actionLink,
  imageSource,
  imageAlt,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageSource} alt={imageAlt} />
      </div>
      <div className={styles.textContainer}>
        <h2>{heading}</h2>
        <p style={{ color: 'grey', fontWeight: '700' }}>{cardText1}</p>
        <p>{cardText2}</p>
        <button className={styles.actionButton}>
          <a href={actionLink}>{actionText}</a>
        </button>
      </div>
    </div>
  );
};

export default MobileCard;
