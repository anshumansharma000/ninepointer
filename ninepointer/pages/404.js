import styles from '../styles/404.module.scss';
import Link from 'next/link';

const notFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src='assets/svg-assets/undraw_not_found_-60-pq.svg' alt='404' />
      </div>
      <h2>The page you seek is hiding. But worry not.</h2>
      <p>
        We'll help you find your way{' '}
        <a style={{ color: '#3EC221' }} href='/'>
          <strong>home.</strong>
        </a>
      </p>
    </div>
  );
};

export default notFound;
