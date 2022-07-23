import styles from './NewsLetter.module.scss';

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <h2>Catch up on the latest updates in the space.</h2>
      <p style={{ color: 'grey', fontWeight: '600' }}>
        Subscribe to our newsletter. No spam ever. Pinky promise.
      </p>
      <div className={styles.action}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='your@email.com'
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
