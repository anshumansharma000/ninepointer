import React, { useState, useEffect } from 'react';
import SideBar from '../../../../components/Admin/Panel/SideBar';
import TopBar from '../../../../components/Admin/Panel/TopBar';
import styles from './users.module.scss';
import { universities } from '../../../../data/universities';
import { useRouter } from 'next/router';
import Message from '../../../../components/Messge';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Link from 'next/link';
import SideBarPageContext from '../../../../context/SideBarPageContext';
import { useContext } from 'react';
const upload = () => {
  const router = useRouter();
  const { sideBarPage, setSideBarPage } = useContext(SideBarPageContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    // user_id: cookies.UserId,
    // branch: '',
    // semester: '',
    // type: '',
    // subject: '',
    // title: '',
    // creator: '',
    // videoLink: '',
    // description: '',
    // file: '',
  });
  const [file, setFile] = useState('');

  const uploadData = async () => {
    console.log('Submit');
    console.log(formData);
    const uploadData = { ...formData };
    console.log(Object.values(uploadData));
    const res = await axios.post(
      `https://ninepointer-staging.herokuapp.com/api/v1/engineering/user`,
      formData
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadData();
  };

  const handleChange = (e) => {
    console.log('change');
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChange = (e) => {
    console.log('file change');
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    if (!router.isReady) return;
    if (sideBarPage !== 'users') {
      setSideBarPage('users');
    }
  }, [router.isReady, router.pathname]);
  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <div className={styles.sections}>
          <SideBar />
          <div className={styles.pageContent}>
            <div className={styles.containers}>
              <h1>Add User</h1>
              {message && <Message />}
              <form onSubmit={handleSubmit}>
                <section>
                  <label htmlFor='role'>Role</label>
                  <select name='role' id='role' onChange={handleChange}>
                    <option value='' disabled selected>
                      Select your option
                    </option>
                    <option value='admin' selected={formData.branch == 'admin'}>
                      Admin
                    </option>
                    <option
                      value='manager'
                      selected={formData.branch == 'manager'}
                    >
                      Manager
                    </option>
                    <option
                      value='customer'
                      selected={formData.branch == 'customer'}
                    >
                      Customer
                    </option>
                    <option
                      value='employee'
                      selected={formData.branch == 'employee'}
                    >
                      Employee
                    </option>
                  </select>

                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='username'
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {/* <input
                type='text'
                name='university'
                id='university'
                placeholder='University'
                required={true}
                value={formData.university}
                onChange={handleChange}
              /> */}
                  <label htmlFor='password'>Password</label>
                  <input
                    type='text'
                    name='password'
                    id='password'
                    placeholder='Password'
                    required={false}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {/* <label htmlFor='branch'>Branch</label> */}
                  {/* <input
              type='text'
              name='branch'
              id='branch'
              placeholder='Branch'
              required={true}
              value={formData.branch}
              onChange={handleChange}
            /> */}
                  {/* {uploadPercent != 0 && <Progress percentage={uploadPercent} />} */}
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input type='submit' />
                  {/* {message ? (
                      <Message msg={message} setMessage={setMessage} />
                    ) : null} */}
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default upload;
