import styles from './HeroBanner.module.scss';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroText}>
        <h2>
          Get better grades with{' '}
          <span style={{ color: '#7BBB43' }}>ninepointer.</span>
        </h2>
        <p>
          <strong>
            Learn from ninepointers from IITs, NITs, BITS and India’s other top
            colleges and stay ahead of your college peers.
          </strong>
        </p>
        <div className={styles.action}>
          <a
            href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>Explore our content</button>
          </a>
          <a
            href='https://linktr.ee/ninepointer'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button style={{ color: '#7BBB43', backgroundColor: 'white' }}>
              Join the community
            </button>
          </a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src='assets/images/OBJECTS.svg' alt='Hero Banner' />
      </div>
    </div>
  );
};

export default HeroBanner;
