import styles from './NewsLetter.module.scss';

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <h2>Catch up on the latest updates from the Community</h2>
      <p style={{ color: 'grey', fontWeight: '600' }}>
        Subscribe to our Newsletter ( We never spam our users )
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
