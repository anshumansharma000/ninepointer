import axios from 'axios';
import Router from 'next/router';
import React, { useState } from 'react';
import userContext from '../context/userContext';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.scss';

const login = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    console.log(username.value);
    console.log(password.value);
    e.preventDefault();
    try {
      const res = username.value.split('@')[1]
        ? await axios.post(
            'http://ninepointer-staging.herokuapp.com/api/v1/engineering/user/login',
            { email: username.value, password: password.value }
          )
        : await axios.post(
            'https://ninepointer-staging.herokuapp.com/api/v1/engineering/user/login',
            { username: username.value, password: password.value }
          );
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.data.role);
      console.log(res.data);
      console.log(res.data.data.role);
      router.back();
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username or email'
          id='username'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          id='password'
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default login;
