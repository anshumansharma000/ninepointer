import styles from '../styles/content.module.css';
import ContentCard from '../components/ContentCard';

const Content = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.heading}>
            <h3>Filters</h3>
            <div className='filterBranch'></div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <ContentCard />
        </div>
      </div>
    </div>
  );
};

export default Content;
