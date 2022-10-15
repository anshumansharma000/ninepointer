import React, { useState, useEffect } from 'react';
import SideBar from '../../../../components/Admin/Panel/SideBar';
import TopBar from '../../../../components/Admin/Panel/TopBar';
import styles from './videos.module.scss';
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
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    // user_id: cookies.UserId,
    branch: '',
    semester: '',
    type: '',
    subject: '',
    title: '',
    creator: '',
    videoLink: '',
    description: '',
    // file: '',
  });
  const [file, setFile] = useState('');
  const { sideBarPage, setSideBarPage } = useContext(SideBarPageContext);
  useEffect(() => {
    if (!router.isReady) return;
    if (sideBarPage !== 'videos') {
      setSideBarPage('videos');
    }

    const fetchData = async () => {
      console.log(
        router.asPath.split('/')[router.asPath.split('/').length - 1]
      );
      const res = await axios.get(
        `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video/${
          router.asPath.split('/')[router.asPath.split('/').length - 1]
        }`
      );
      console.log(res.data.data);
      setFormData({
        branch: res.data.data.branch[0],
        semester: res.data.data.semester,
        subject: res.data.data.subject,
        type: res.data.data.type,
        title: res.data.data.title,
        creator: res.data.data.creator,
        videoLink: res.data.data.videoLink,
        description: res.data.data.description,
      });
    };
    try {
      fetchData();
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
  }, [router.isReady, router.pathname]);

  const updateData = async () => {
    try {
      const res = await axios.patch(
        `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video/${
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateData();
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
            {formData.videoLink && (
              <div className={styles.containers}>
                <h1>Edit Video</h1>
                {message && <Message />}
                <form onSubmit={handleSubmit}>
                  <section>
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
                        selected={formData.branch == 'Computer Science'}
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

                    <label htmlFor='title'>Title</label>
                    <input
                      contentEditable={true}
                      type='text'
                      name='title'
                      id='title'
                      placeholder='title'
                      value={formData.title}
                      onChange={handleChange}
                    />
                    <label htmlFor='description'>Description</label>
                    {/* <input
                      type='textArea'
                      name='description'
                      id='description'
                      placeholder='Description'
                      value={formData.description}
                      onChange={handleChange}
                    /> */}
                    <textarea
                      name='description'
                      id='description'
                      cols='20'
                      rows='8'
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor='subject'>Subject</label>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      placeholder='Subject'
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <label htmlFor='type'>Video Type</label>
                    <select name='type' onChange={handleChange}>
                      <option value='' disabled>
                        Select your option
                      </option>
                      <option
                        value='Topic Video'
                        selected={formData.type == 'Topic Video'}
                      >
                        Topic Video
                      </option>
                      <option
                        value='Solution Video'
                        selected={formData.type == 'Solution Video'}
                      >
                        Solution Video
                      </option>
                      <option
                        value='Engineering Life'
                        selected={formData.type == 'Engineering Life'}
                      >
                        Engineering Life
                      </option>
                      <option
                        value='Others'
                        selected={formData.type == 'Others'}
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
                    <label htmlFor='creator'>Creator</label>
                    <input
                      type='text'
                      name='creator'
                      id='creator'
                      placeholder='Creator'
                      required={false}
                      value={formData.creator}
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
                    <label htmlFor='videoLink'>videoLink</label>
                    <input
                      type='text'
                      name='videoLink'
                      id='videoLink'
                      placeholder='Video Link'
                      value={formData.videoLink}
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
