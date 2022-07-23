import styles from '../styles/FeatureCard.module.scss';

const FeatureCard = ({ text, image, background }) => {
  return (
    <div
      className={styles.container}
      style={
        {
          // color: 'white',
        }
      }
    >
      {/* {image && (
        <div className={styles.image}>
          <img src={image} alt='ninepointer' />
        </div>
      )} */}
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
