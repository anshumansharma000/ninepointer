import Meta from '../components/Layout/Meta';
import styles from '../styles/about.module.scss';
import MessageBar from '../components/About/MessageBar';
import FeatureCard from '../components/FeatureCard';
import TeamCard from '../components/About/TeamCard';

export default function About() {
  return (
    <>
      <Meta title='About' />
      <div className={styles.container}>
        <div className={styles.motto}>
          <div className={styles.mottoText}>
            <h1>Our Why</h1>
            <p>
              We at ninepointer aim to induce community based learning platforms
              across the country where students can colaborate, learn from top
              ninepointers from premiere institutions like IITs, NITs, BITS etc.
              in an intuitive manner and improve their grades consequently.
            </p>
          </div>
          <div className={styles.image}>
            <img src='assets/images/image 1.svg' alt='motto' />
          </div>
        </div>
        <MessageBar
          children={
            <>
              <strong>Openings:</strong> We're looking for Interns. Click&nbsp;
              <span>
                <a
                  href='https://linktr.ee/ninepointer'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <strong>here</strong>
                </a>{' '}
                to learn more.
              </span>
            </>
          }
        />
        <div className={styles.why}></div>
        <div className={styles.whatWeDo}>
          <h1>What do we do?</h1>
          <p>
            We provide a platform for ninepointers to create content on the
            topics they have a deep understanding and other students to consume
            high quality course content from India's top ninepointers from IITs,
            NITs, BITS and other top colleges.
          </p>
          <div className={styles.featureCards}>
            <FeatureCard
              text='Topic Videos'
              background='assets/svg-assets/undraw_video_files_fu10.svg'
            />
            <FeatureCard
              text='Previous Year Questions'
              background='assets/svg-assets/undraw_text_files_au1q.svg'
            />
            <FeatureCard text='Demanding Soft Skills' />
          </div>
          <p style={{ fontWeight: 700 }}>
            We're one of the{' '}
            <span style={{ color: '#0875F7', fontWeight: '700' }}>
              FASTEST GROWING
            </span>{' '}
            <span style={{ color: 'green', fontWeight: '700' }}>
              STUDENT COMMUNITIES
            </span>{' '}
            across the country
          </p>
        </div>
        <div className={styles.meetTheTeam}>
          <h1>Meet the Team</h1>
          <div className={styles.image}>
            <img src='' alt='' />
          </div>
          <div className={styles.team}>
            <TeamCard
              name='Prateek Pawan'
              role='Co-founder'
              description='Founded successful food startups like Maa Bhook Lagi, Birinz, Paratha Experiment. NIT Rourkela alumni.'
              twitter='https://www.twitter.com/prateekpawan'
            />
            <TeamCard
              name='Kush Beejal'
              role='Co-founder'
              description='Founder and Ex- CEO of NeoStencil, Ex-VP Unacademy, IIT Bombay and IIM Calcutta alumni.'
              twitter='https://twitter.com/kushbeejal'
              linkedIn='https://in.linkedin.com/in/kushbeejal'
            />
          </div>
        </div>
      </div>
    </>
  );
}
