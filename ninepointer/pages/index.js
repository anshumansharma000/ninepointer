import styles from '../styles/Home.module.css';
import BigCard from '../components/BigCard';
import HeroBanner from '../components/HeroBanner';
import NumberCard from '../components/NumberCard';
import NewsLetter from '../components/NewsLetter';
import MobileCard from '../components/MobileCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <HeroBanner />
        <div className={styles.bigCards}>
          <BigCard
            leftText={false}
            heading='Curated course videos'
            cardText1='The friend who teaches you the night before the exam. Now one step closer to you, on demand.'
            cardText2='Our content goes through various quality checks to ensure content integretity and authenticity before the final upload. You can rest assured with ninepointer guarantee.'
            actionText='Explore'
            actionLink='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg'
            imageSource='assets/svg-assets/undraw_video_files_fu10.svg'
            imageAlt='grades-svg'
            textAnimation='fade-right'
          />
          <BigCard
            leftText={true}
            heading='Solved Question Papers'
            cardText1='All your exam worries sorted with solved papers and detailed analysis'
            cardText2='No more scouring for hours on the internet looking for solved question papers. Better utilize that time clearing important concepts and developing a deep understanding by going through our step by step solutions backed by the ninepointer guarantee.'
            actionText='Explore'
            actionLink='https://linktr.ee/ninepointer'
            imageSource='assets/svg-assets/undraw_text_files_au1q.svg'
            imageAlt='grades-svg'
            textAnimation='fade-left'
          />
        </div>
        <div className={styles.mobileCards}>
          <MobileCard
            heading='Curated course videos'
            cardText1='The friend who teaches you the night before the exam. Now one step closer to you, on demand.'
            cardText2='Our content goes through various quality checks to ensure content integretity and authenticity before the final upload. You can rest assured with ninepointer guarantee.'
            actionText='Explore'
            actionLink='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg'
            imageSource='assets/svg-assets/undraw_video_files_fu10.svg'
            imageAlt='grades-svg'
          />
          <MobileCard
            heading='Curated course videos'
            cardText1='The friend who teaches you the night before the exam. Now one step closer to you, on demand.'
            cardText2='Our content goes through various quality checks to ensure content integretity and authenticity before the final upload. You can rest assured with ninepointer guarantee.'
            actionText='Explore'
            actionLink='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg'
            imageSource='assets/svg-assets/undraw_video_files_fu10.svg'
            imageAlt='grades-svg'
          />
        </div>
        <div className={styles.community}>
          <div className={styles.left}>
            <h2 style={{ fontWeight: '700' }}>
              Learning is fun with ninepointer!{' '}
            </h2>
            <div className={styles.imageContainer}>
              <img
                src='assets/svg-assets/undraw_community_re_cyrm-svg.svg'
                alt='community'
              />
            </div>
          </div>
          <div className={styles.right}>
            <h2>
              We're one of the fastet growing student communities across the
              country
            </h2>
            <div className={styles.numberCards}>
              <NumberCard number='150k+' text='Views' />
              <NumberCard number='42' text='Creators' />
              <NumberCard number='3.5k+' text='ninepointers' />
            </div>
            <button>
              <a href='https://linktr.ee/ninepointer'>Join the conversation</a>
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
