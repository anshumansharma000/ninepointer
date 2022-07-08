import styles from '../styles/Home.module.scss';
import BigCard from '../components/Home/BigCard';
import HeroBanner from '../components/Home/HeroBanner';
import NumberCard from '../components/Home/NumberCard';
import NewsLetter from '../components/Home/NewsLetter';
import MobileCard from '../components/Home/MobileCard';
import CreatorCard from '../components/Home/CreatorCards';
import CreatorCards from '../components/Home/CreatorCards';
import Link from 'next/link';
import VoiceCard from '../components/Home/VoiceCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <HeroBanner />
        <div className={styles.bigCards}>
          <h2 style={{ textAlign: 'center' }}>Ways to learn 📝</h2>
          <BigCard
            leftText={false}
            heading='Topic specific course videos'
            cardText1='The friend who teaches you the night before the exam. Now one step closer to you, on demand.'
            cardText2='Our content goes through various quality checks to ensure content integretity and authenticity before the final upload. You can rest assured with ninepointer guarantee.'
            actionText='Browse videos'
            actionLink='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg'
            imageSource='assets/svg-assets/undraw_video_files_fu10.svg'
            imageAlt='grades-svg'
            textAnimation='fade-right'
          />
          <BigCard
            leftText={true}
            heading='Previous Year Questions and solutions'
            cardText1='All your exam worries sorted with previous year questions and solutions'
            cardText2='No more scouring for hours on the internet looking for solved question papers. Better utilize that time clearing important concepts and developing a deep understanding by going through our step by step solutions backed by the ninepointer guarantee.'
            actionText='Search PYQs'
            actionLink='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/playlists'
            imageSource='assets/svg-assets/undraw_text_files_au1q.svg'
            imageAlt='grades-svg'
            textAnimation='fade-left'
          />
        </div>
        <div className={styles.mobileCards}>
          <MobileCard
            heading='Topic specific course videos'
            cardText1='The friend who teaches you the night before the exam. Now one step closer to you, on demand.'
            cardText2='Our content goes through various quality checks to ensure content integretity and authenticity before the final upload. You can rest assured with ninepointer guarantee.'
            actionText='Browse videos'
            actionLink='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg'
            imageSource='assets/svg-assets/undraw_video_files_fu10.svg'
            imageAlt='grades-svg'
          />
          <MobileCard
            heading='Previous Year Questions and Solutions'
            cardText1='All your exam worries sorted with previous year questions and solutions'
            cardText2='No more scouring for hours on the internet looking for solved question papers. Better utilize that time clearing important concepts and developing a deep understanding by going through our step by step solutions backed by the ninepointer guarantee.'
            actionText='Search PYQs'
            actionLink='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/playlists'
            imageSource='assets/svg-assets/undraw_text_files_au1q.svg'
            imageAlt='grades-svg'
          />
        </div>

        <div className={styles.creators}>
          <h2>Meet our amazing creators 👋</h2>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>Learn from the best of the best🎯</h3>
              <p>
                ninepointer is powered by a community of ninepointers from IITs,
                NITs, BITS and other top universities of India. They have a
                robust unerstanding of the subject matter and are highly
                passionate about giving back to the community.
              </p>
              <div className={styles.action}>
                <Link href='/create'>
                  <button>Join as a creator</button>
                </Link>
                <Link href='/create'>
                  <button
                    style={{ color: 'green', backgroundColor: 'transparent' }}
                  >
                    Contribute in other ways
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.creatorCards}>
              <CreatorCards />
            </div>
          </div>
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
              <NumberCard number='40+' text='Creators' />
              <NumberCard number='20+' text='Campus Managers' />
              <NumberCard number='3.5k+' text='ninepointers' />
            </div>
            <button>
              <a
                href='https://t.me/nine_pointer'
                target='_blank'
                rel='noopener noreferrer'
              >
                Join the conversation
              </a>
            </button>
          </div>
        </div>
        <div className={styles.testimonials}>
          <h2>Community voices 📣</h2>
          <div className={styles.content}>
            <VoiceCard
              name='Aditya Shrivastava'
              college='IIT Delhi'
              branch='CSE'
              year={3}
              photo='/assets/images/creator_rushi.jpeg'
              rightPic={true}
              testimonial='ninepointer has helped me get better grades. Learing from my peers instilled a confidence within me. Moreover they way of teaching, the lingo is quite intuitive. It felt like I was learning from a friend who was a tutor.'
            />
          </div>
          <div className={styles.content}>
            <VoiceCard
              name='Aditya Shrivastava'
              college='IIT Delhi'
              branch='CSE'
              year={3}
              photo='/assets/images/creator_nirjhar.jpg'
              rightPic={false}
              testimonial='ninepointer has helped me get better grades. Learing from my peers instilled a confidence within me. Moreover they way of teaching, the lingo is quite intuitive. It felt like I was learning from a friend who was a tutor.'
            />
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
