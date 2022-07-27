import React, { useState } from 'react';
import styles from '../styles/contact.module.scss';
import { BsTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import axios from 'axios';
import Message from '../components/Messge';

const contactnew = () => {
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    collegeName: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(e.target.name);
    console.log(e.target.value);
    setformData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };
  // async submitForm() {
  //     const formData = new FormData()
  //     Object.keys(this.form).forEach((key) => {
  //       formData.append(key, this.form[key])
  //     })

  //     try {
  //       await this.$axios.post('/ajax/contact/contact-us', formData)
  //       this.$emit('formSent')
  //     } catch (err) {
  //       this.errors.push('form_error')
  //     }
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: formData.firstName + formData.lastName,
        email: formData.emailAddress,
        college: formData.collegeName,
        message: formData.message,
      };
      if (formData.phoneNumber) {
        data.phone = formData.phoneNumber;
      }

      axios.defaults.headers.post['Content-Type'] = 'application/json';
      const res = await axios.post(
        'https://formsubmit.co/ajax/9c09d36ffb0944867bb6a516932090a8',
        data
      );

      // const response = await axios.post('',formData);
      console.log(res.status);
      if (res.status === 200) {
        alert(
          `Thank you for submitting ${formData.firstName}! We'll get in touch with you.`
        );
        resetForm();
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
    }
  };

  const resetForm = () => {
    setformData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      collegeName: '',
      message: '',
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerLeft}>
          <h2> We'd love to hear from you.</h2>
          <div className={styles.rowElements}>
            <input
              type='text'
              name='firstName'
              placeholder='First Name*'
              onChange={handleChange}
              value={formData.firstName}
              required={true}
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name*'
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className={styles.rowElements}>
            <input
              type='text'
              name='phoneNumber'
              placeholder='Phone Number'
              onChange={handleChange}
              value={formData.phoneNumber}
            />
            <input
              type='email'
              name='emailAddress'
              placeholder='Email Address*'
              onChange={handleChange}
              value={formData.emailAddress}
              required={true}
            />
          </div>
          <div className={styles.rowElements2}>
            <input
              type='text'
              name='collegeName'
              placeholder='College Name*'
              onChange={handleChange}
              value={formData.collegeName}
              required={true}
            />
            <br /> <br />
            <input
              type='textarea'
              name='message'
              placeholder='Your message goes here*'
              onChange={handleChange}
              value={formData.message}
              required={true}
            />{' '}
          </div>
          <br />
          <input type='submit' />
        </div>
        {errorMessage && (
          <Message msg={errorMessage} setMessage={setErrorMessage} />
        )}
      </form>

      <div className={styles.contactInfo}>
        <h2> Contact Info</h2>
        <div className={styles.contactIcons}>
          <div className={styles.callicon}>
            <BsTelephoneFill />
            <p> +91 7536982139 </p>{' '}
          </div>
          <br /> <br />
        </div>
        <div className={styles.mailicon}>
          <div className={styles.contactIcons}>
            <SiGmail />
            <p>
              {' '}
              <a href='mailto:info@ninepointer.com'>
                info@ninepointer.com
              </a>{' '}
            </p>{' '}
          </div>
        </div>
        <br />
        <div className={styles.socialIcons}>
          <a href='https://www.facebook.com/people/ninepointer/100083236507235/'>
            <ion-icon name='logo-facebook'></ion-icon>
          </a>

          <a href='https://api.whatsapp.com/send?phone=917737384957'>
            <ion-icon name='logo-whatsapp'></ion-icon>
          </a>

          <a href='https://www.instagram.com/nine_pointer/'>
            <ion-icon name='logo-instagram'></ion-icon>
          </a>
          <a href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/featured'>
            <ion-icon name='logo-youtube'></ion-icon>
          </a>

          <script
            type='module'
            src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
          ></script>
          <script
            noModule
            src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
          ></script>
        </div>
      </div>
    </div>
    // should work now
  );
};
export default contactnew;
