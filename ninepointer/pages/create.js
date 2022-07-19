import React from 'react';
import styles from '../styles/create.module.scss';
import LinkButton from '../components/LinkButton';
import TestimonialCard from '../components/TestimonialCard';
import Meta from '../components/Layout/Meta';
const create = () => {
  return (
    <>
      <Meta title='Become a Content Creator ninepointer' />
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
            You
          </span>{' '}
          +{' '}
          <span span style={{ color: '#3EC221' }}>
            We
          </span>{' '}
          = Win Win
        </h3>
        <div className={styles.buttons}>
          <LinkButton
            color='#0875F7'
            text='Join as a Content Creator'
            width='200px'
            link='https://forms.gle/CwDnQ8zt6SHeCgqLA'
          />
          <LinkButton
            color='#3EC221'
            text='Join as a Campus Marketing Manager'
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
            testimonial='"I always wanted to adopt the teaching profession and with ninepointer, I got the chance to explore this domain. I have discovered new ways of teaching and groomed my concepts a lot in the past few months. Teaching has instilled a sense of completion and confidence within me because I feel very happy when videos made by me on ninepointer help students from all over India. Moreover, I have also improved myself as a person working amongst creative & knowledgeable people at ninepointer.  "'
          />
          <TestimonialCard
            name='Abhinandan Mishra'
            sgpa='9.01'
            branch='CSE'
            college='NIT Rourkela'
            testimonial='"ninepointer has been a revelation in my journey as a student, content creator and educator. Creating content has helped me fortify key academic concepts by learning, reviewing and then teaching and thereby filling the gaps. Feynman technique does work. It has helped me improve my grades, exam preparations thanks to the extensive previous year questions bank and all the while getting paid for the contribution to the ninepointer community. It is a positive sum game for all of us."'
          />
          <TestimonialCard
            name='Rushi Kale'
            sgpa='9.01'
            branch='CSE'
            college='IIT Bombay'
            testimonial='"I liked the concept of ninepointer very much where every student can help their fellow students, with this, they just require a deeper understanding of that topic and a CGPA of above 9. They dont have to teach the whole chapter but rather on the topic they are most comfortable with. This is the reason I joined ninepointer as a content creator. I record lessons whenever my mind says. The money I make with it raises my college expenses serving as my pocket money and it feels really good to earn in college."'
          />
        </div>
      </div>
    </>
  );
};

export default create;
