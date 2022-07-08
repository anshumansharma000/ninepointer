import styles from './BigCard.module.scss';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BigCard = ({
  leftText,
  heading,
  cardText1,
  cardText2,
  actionText,
  actionLink,
  imageSource,
  imageAlt,
  textAnimation,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return leftText == true ? (
    <div className={styles.cardContainer}>
      <div className={styles.textContainer}>
        <h2>{heading}</h2>
        <p style={{ color: 'grey', fontWeight: '700' }}>{cardText1}</p>
        <p>{cardText2}</p>
        <button className={styles.actionButton}>
          <a href={actionLink} target='_blank' rel='noopener noreferrer'>
            {actionText}
          </a>
        </button>
      </div>
      <div
        data-aos={textAnimation}
        data-aos-anchor-placement='top-center'
        data-aos-once={true}
        className={styles.imageContainer}
      >
        <img src={imageSource} alt={imageAlt} />
      </div>
    </div>
  ) : (
    <div className={styles.cardContainer}>
      <div
        data-aos={textAnimation}
        data-aos-anchor-placement='top-center'
        data-aos-once={true}
        className={styles.imageContainer}
        style={{ paddingLeft: 48, flex: 3 }}
      >
        <img src={imageSource} alt={imageAlt} />
      </div>
      <div
        className={styles.textContainer}
        style={{ paddingRight: 64, flex: 4 }}
      >
        <h2>{heading}</h2>
        <p style={{ color: 'grey', fontWeight: '700' }}>{cardText1}</p>
        <p>{cardText2}</p>
        <button className={styles.actionButton}>
          <a href={actionLink} target='_blank' rel='noopener noreferrer'>
            {actionText}
          </a>
        </button>
      </div>
    </div>
  );
};

export default BigCard;
