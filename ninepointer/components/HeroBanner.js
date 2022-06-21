import styles from '../styles/HeroBanner.module.scss';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroText}>
        <h2>
          Get better grades with{' '}
          <span style={{ color: 'green' }}>ninepointer.</span>
        </h2>
        <p>
          <strong>
            Learn from ninepointers from India’s top colleges and stay ahead of
            your college peers.
          </strong>
        </p>
        <div className={styles.action}>
          <button>
            <a
              href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg'
              target='_blank'
              rel='noopener noreferrer'
            >
              Explore our content
            </a>
          </button>
          <button style={{ color: 'grey', backgroundColor: 'white' }}>
            <a
              href='https://linktr.ee/ninepointer'
              target='_blank'
              rel='noopener noreferrer'
            >
              Join the community
            </a>
          </button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src='assets/images/OBJECTS.svg' alt='Hero Banner' />
      </div>
    </div>
  );
};

export default HeroBanner;
