import React from 'react';
import styles from '../styles/create.module.scss';
import LinkButton from '../components/LinkButton';
import TestimonialCard from '../components/TestimonialCard';
import Meta from '../components/Layout/Meta';
const create = () => {
  return (
    <>
      <Meta title='Become a content creator ninepointer' />
      <div className={styles.container}>
        <div className={styles.image}>
          <img src='assets/svg-assets/group.svg' alt='partner' />
        </div>
        <h1>
          Partner with <span style={{ color: '#0875F7' }}>nine</span>
          <span style={{ color: '#3EC221' }}>pointer</span>
        </h1>
        <h3>
          <span span style={{ color: '#0875F7' }}>
            you
          </span>{' '}
          +{' '}
          <span span style={{ color: '#3EC221' }}>
            we
          </span>{' '}
          = win win
        </h3>
        <div className={styles.buttons}>
          <LinkButton
            color='#0875F7'
            text='Join as a content creator'
            width='200px'
            link='https://forms.gle/CwDnQ8zt6SHeCgqLA'
          />
          <LinkButton
            color='#3EC221'
            text='Join as a campus marketing manager'
            width='200px'
            link='https://docs.google.com/forms/d/1vKimFTCiCkxlXHxCepImYQXto6xjF2ZSQFA82GX1yPY/edit#responses'
          />
        </div>
        {/* <h1>TESTIMONIALS</h1> */}
        <div className={styles.testimonials}>
          <TestimonialCard
            name='Aditya Shrivastava'
            sgpa='9.01'
            branch='CSE'
            college='IIT Delhi'
            testimonial='Ninepointer has been a revelation in my journey as a student, content creator and educator. Creating content has helped me fortify key academic concepts by learning, reviewing and then teaching and thereby filling the gaps. Feynman technique does work. It has helped me improve my grades, exam preparations thanks to the extensive previous year questions bank and all the while getting paid for the contribution to the ninepointer community. It is a positive sum game for all of us.'
          />
          <TestimonialCard
            name='Abhinandan Mishra'
            sgpa='9.01'
            branch='CSE'
            college='NIT Rourkela'
            testimonial='Ninepointer has been a revelation in my journey as a student, content creator and educator. Creating content has helped me fortify key academic concepts by learning, reviewing and then teaching and thereby filling the gaps. Feynman technique does work. It has helped me improve my grades, exam preparations thanks to the extensive previous year questions bank and all the while getting paid for the contribution to the ninepointer community. It is a positive sum game for all of us.'
          />
          <TestimonialCard
            name='Rushi Kale'
            sgpa='9.01'
            branch='CSE'
            college='IIT Bombay'
            testimonial='Ninepointer has been a revelation in my journey as a student, content creator and educator. Creating content has helped me fortify key academic concepts by learning, reviewing and then teaching and thereby filling the gaps. Feynman technique does work. It has helped me improve my grades, exam preparations thanks to the extensive previous year questions bank and all the while getting paid for the contribution to the ninepointer community. It is a positive sum game for all of us. '
          />
        </div>
      </div>
    </>
  );
};

export default create;
