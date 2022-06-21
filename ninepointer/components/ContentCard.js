import styles from '../styles/ContentCard.module.css';

const ContentCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          src='https://img.youtube.com/vi/wTygi0JdckM/0.jpg'
          alt='thumbnail'
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.contentTitle}>
          <h4>Video Title - Subject</h4>
        </div>
        <p>Branch, Semester</p>
        <p>Author</p>
      </div>
    </div>
  );
};

export default ContentCard;
