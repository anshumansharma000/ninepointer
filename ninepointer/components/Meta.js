import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width =device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='preconnect' href='https://fonts.googleapis.com'></link>
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossorigin
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bangers&family=Nunito&family=Readex+Pro:wght@200;300;400&display=swap'
        rel='stylesheet'
      ></link>

      <link
        rel='icon'
        type='image/x-icon'
        href='assets/images/channels4_profile-removebg-preview.png'
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'ninepointer Learn from ninepointers from India’s top colleges ',
  keywords:
    "b.tech, engineering, mbbs, medical, syllabus, bachelor's, btech, be,",
  description:
    ' Ninepointer helps you get better grades in exams! The content on the website is uploaded and updated by undergrad students with a deep insight in a particular subject. It undergoes various quality checks and is updated on our website after approval.',
};

export default Meta;
