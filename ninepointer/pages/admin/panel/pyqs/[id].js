import React, { useState, useEffect } from 'react';
import SideBar from '../../../../components/Admin/Panel/SideBar';
import TopBar from '../../../../components/Admin/Panel/TopBar';
import styles from './upload.module.scss';
import { universities } from '../../../../data/universities';
import { useRouter } from 'next/router';
import Message from '../../../../components/Messge';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Link from 'next/link';
import { storage } from '../../../../utils/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import SideBarPageContext from '../../../../context/SideBarPageContext';
import { useContext } from 'react';

const id = () => {
  const router = useRouter();
  const { sideBarPage, setSideBarPage } = useContext(SideBarPageContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    // user_id: cookies.UserId,
    branch: '',
    semester: '',
    year: '',
    subject: '',
    university: '',
    author: '',
    type: '',
    url: '',
    fileLink: '',
    solutionLink: '',
    // file: '',
  });
  const [file, setFile] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    if (sideBarPage !== 'pyqs') {
      setSideBarPage('pyqs');
    }
  }, [router.isReady, router.pathname]);

  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      console.log(
        router.asPath.split('/')[router.asPath.split('/').length - 1]
      );
      const res = await axios.get(
        `https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq/${
          router.asPath.split('/')[router.asPath.split('/').length - 1]
        }`
      );
      console.log(res.data.data);
      setFormData({
        branch: res.data.data.branch[0],
        semester: res.data.data.semester,
        subject: res.data.data.subject,
        year: res.data.data.year,
        type: res.data.data.type,
        university: res.data.data.university,
        author: res.data.data.author,
        url: res.data.data.fileLink,
      });
    };
    try {
      fetchData();
    } catch (err) {
      setMessage(err.response.data.error);
    }
  }, [router.isReady]);

  const updateData = async () => {
    try {
      const res = await axios.patch(
        `https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq/${
          router.asPath.split('/')[router.asPath.split('/').length - 1]
        }`,
        formData
      );
    } catch (err) {
      if (err.response.status === 500) {
        console.log('Something went wrong');
        setMessage('There was a problem with the server');
      } else if (err.response.status === 400) {
        console.log(err.response.data.error);
        setMessage(err.response.data.error);
      } else {
        console.log(err.response.data.error);
        setMessage(err.response.data.error);
      }
    }
  };
  const firebaseUpload = async () => {
    if (!file) return;
    try {
      const storageRef = ref(
        storage,
        `/pyqs/${file.name}-${formData.subject}-${formData.year}-${formData.semester}`
      );
      const taskSnapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(taskSnapshot.ref);
      console.log(url);
      setFormData((prevState) => ({
        ...prevState,
        url,
      }));
      const res = await axios.patch(
        `https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq/${
          router.asPath.split('/')[router.asPath.split('/').length - 1]
        }`,
        { ...formData, url }
      );
    } catch (error) {
      if (err.response.status === 500) {
        console.log('Something went wrong');
        setMessage('There was a problem with the server');
      } else if (err.response.status === 400) {
        console.log(err.response.data.error);
        setMessage(err.response.data.error);
      } else {
        console.log(err.response.data.error);
        setMessage(err.response.data.error);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      firebaseUpload();
    } else {
      updateData();
    }
  };

  const handleChange = (e) => {
    console.log('change');
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChange = (e) => {
    console.log('file change');
    setFile(e.target.files[0]);
  };
  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <div className={styles.sections}>
          <SideBar />
          <div className={styles.pageContent}>
            {formData.subject && (
              <div className={styles.containers}>
                <h1>Edit PYQ</h1>
                {message && <Message />}
                <form onSubmit={handleSubmit}>
                  <section>
                    <label htmlFor='university'>University</label>
                    <select name='university' onChange={handleChange}>
                      <option value='' disabled>
                        Select your option
                      </option>
                      {universities.map((university, index) => {
                        return (
                          <option
                            key={index}
                            value={university.name}
                            selected={formData.university == university.name}
                          >
                            {university.name}
                          </option>
                        );
                      })}
                    </select>
                    <label htmlFor='branch'>Branch</label>
                    <select name='branch' id='branch' onChange={handleChange}>
                      <option value='' disabled selected>
                        Select your option
                      </option>
                      <option
                        value='Common'
                        selected={formData.branch == 'Common'}
                      >
                        Common
                      </option>
                      <option
                        value='Computer Science'
                        selected={formData.branch == 'Common'}
                      >
                        Computer Science
                      </option>
                      <option
                        value='Electrical'
                        selected={formData.branch == 'Electrical'}
                      >
                        Electrical
                      </option>
                      <option
                        value='Electronics'
                        selected={formData.branch == 'Elecctronics'}
                      >
                        Electronics
                      </option>
                      <option
                        value='Chemical'
                        selected={formData.branch == 'Chemical'}
                      >
                        Chemical
                      </option>
                      <option
                        value='Civil'
                        selected={formData.branch == 'Civil'}
                      >
                        Civil
                      </option>
                      <option
                        value='Mechanical'
                        selected={formData.branch == 'Mechanical'}
                      >
                        Mechanical
                      </option>
                      <option
                        value='Textile'
                        selected={formData.branch == 'Textile'}
                      >
                        Textile
                      </option>
                      <option
                        value='Ceramic'
                        selected={formData.branch == 'Ceramic'}
                      >
                        Ceramic
                      </option>
                      <option
                        value='Biomedical'
                        selected={formData.branch == 'Biomedical'}
                      >
                        Biomedical
                      </option>
                      <option
                        value='Metallurgy'
                        selected={formData.branch == 'Metallurgy'}
                      >
                        Metallurgy
                      </option>
                      <option value='Others'>Others</option>
                    </select>
                    <label htmlFor='semester'>Semester</label>
                    <select
                      name='semester'
                      id='semester'
                      onChange={handleChange}
                    >
                      <option value='' disabled>
                        Select your option
                      </option>
                      <option value='1' selected={formData.semester == '1'}>
                        1
                      </option>
                      <option value='2' selected={formData.semester == '2'}>
                        2
                      </option>
                      <option value='3' selected={formData.semester == '3'}>
                        3
                      </option>
                      <option value='4' selected={formData.semester == '4'}>
                        4
                      </option>
                      <option value='5' selected={formData.semester == '5'}>
                        5
                      </option>
                      <option value='6' selected={formData.semester == '6'}>
                        6
                      </option>
                      <option value='7' selected={formData.semester == '7'}>
                        7
                      </option>
                      <option value='8' selected={formData.semester == '8'}>
                        8
                      </option>
                    </select>

                    <label htmlFor='year'>Year</label>
                    <input
                      type='year'
                      name='year'
                      id='year'
                      placeholder='Year'
                      required={true}
                      value={formData.year}
                      onChange={handleChange}
                    />
                    <label htmlFor='subject'>Subject</label>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      placeholder='Subject'
                      required={true}
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <label htmlFor='type'>Question Type</label>
                    <select name='type' onChange={handleChange}>
                      <option value='' disabled>
                        Select your option
                      </option>
                      <option
                        value='Regular'
                        selected={formData.branch == 'Regular'}
                      >
                        Regular
                      </option>
                      <option value='Back' selected={formData.branch == 'Back'}>
                        Back
                      </option>
                      <option value='Both' selected={formData.branch == 'Both'}>
                        Both
                      </option>
                      <option
                        value='Others'
                        selected={formData.branch == 'Others'}
                      >
                        Others
                      </option>
                    </select>

                    {/* <input
              type='text'
              name='university'
              id='university'
              placeholder='University'
              required={true}
              value={formData.university}
              onChange={handleChange}
            /> */}
                    <label htmlFor='Author'>Author</label>
                    <input
                      type='text'
                      name='author'
                      id='author'
                      placeholder='Author'
                      required={false}
                      value={formData.author}
                      onChange={handleChange}
                    />
                    <label htmlFor='file'>Choose File</label>
                    <input
                      type='file'
                      name='file'
                      onChange={onChange}
                      value={file}
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
                    <label htmlFor='url'>Add external file link</label>
                    <input
                      type='url'
                      name='url'
                      id='url'
                      placeholder='Add link to file'
                      value={formData.url}
                      onChange={handleChange}
                    />
                    <label htmlFor='solutionLink'>Add solution link</label>
                    <input
                      type='solutionLink'
                      name='solutionLink'
                      id='solutionLink'
                      placeholder='Add solution Link'
                      value={formData.solutionLink}
                      onChange={handleChange}
                    />
                    <input type='submit' />
                    {/* {message ? (
                    <Message msg={message} setMessage={setMessage} />
                  ) : null} */}
                  </section>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default id;
