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
import Meta from '../../../../components/Layout/Meta';
import SideBarPageContext from '../../../../context/SideBarPageContext';
import { useContext } from 'react';

const uploadpyq = () => {
  const { sideBarPage, setSideBarPage } = useContext(SideBarPageContext);
  const router = useRouter();
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
  const [message, setMessage] = useState('');
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [fileLink, setFileLink] = useState('');
  // const [uploadPercent, setUploadPercent] = useState(0);
  useEffect(() => {
    if (!router.isReady) return;
    if (sideBarPage !== 'pyqs') {
      setSideBarPage('pyqs');
    }
  }, [router.isReady, router.pathname]);
  const firebaseUpload = async (file) => {
    if (!file) return;
    const storageRef = ref(
      storage,
      `/pyqs/${file.name}-${formData.subject}-${formData.year}-${formData.semester}`
    );
    // const uploadTask = uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log('file uploaded');
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     console.log(url);
    //     setFileLink(url);
    //     console.log(fileLink);
    //   });
    // });
    const taskSnapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(taskSnapshot.ref);
    console.log(url);
    setFileLink(url);
    let fd = new FormData();
    fd.append('branch', formData.branch);
    fd.append('semester', formData.semester);
    fd.append('year', formData.year);
    fd.append('type', formData.type);
    fd.append('subject', formData.subject);
    fd.append('university', formData.university);
    fd.append('author', formData.author);
    fd.append('fileLink', url);
    fd.append('solutionLink', formData.solutionLink);

    // if (formData.url) fd.append('url', formData.url);

    console.log(fd);

    try {
      const response = await axios.post(
        // 'http://localhost:8000/api/v1/engineering/pyq',
        'https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq',
        fd,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          // onUploadProgress: (progressEvent) => {
          //   setUploadPercent(
          //     parseInt(
          //       Math.round((progressEvent.loaded * 100) / progressEvent.total)
          //     )
          //   );
          //   console.log(uploadPercent);
          //   setTimeout(() => setUploadPercent(0), 8000);
          // },
        }
      );

      const success = response.status == 200;
      console.log(success);
      console.log(response.data);
      setMessage('File Uploaded');
      setFileLink('');
      // setTimeout(() => setMessage(''), 8000);
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
    setFileLink('');
    setTimeout(() => setMessage(''), 5000);
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //check if file and link both are missing, then return error.
    if (!file && !formData.url) {
      setMessage('Please upload file or enter external link');
      return;
    }
    // if (file) fd.append('file', file);
    //if file exists upload to firebase storage and get url
    if (file) {
      await firebaseUpload(file);
    } else {
      let fd = new FormData();
      fd.append('branch', formData.branch);
      fd.append('semester', formData.semester);
      fd.append('year', formData.year);
      fd.append('type', formData.type);
      fd.append('subject', formData.subject);
      fd.append('university', formData.university);
      fd.append('author', formData.author);
      // if (fileLink) fd.append('fileLink', fileLink);

      if (formData.url) fd.append('url', formData.url);

      console.log(fd);

      try {
        const response = await axios.post(
          // 'http://localhost:8000/api/v1/engineering/pyq',
          'https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq',
          fd,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            // onUploadProgress: (progressEvent) => {
            //   setUploadPercent(
            //     parseInt(
            //       Math.round((progressEvent.loaded * 100) / progressEvent.total)
            //     )
            //   );
            //   console.log(uploadPercent);
            //   setTimeout(() => setUploadPercent(0), 8000);
            // },
          }
        );

        const success = response.status == 200;
        console.log(success);
        console.log(response.data);
        setMessage('File Uploaded');
        setFileLink('');
        // setTimeout(() => setMessage(''), 8000);
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
      setFileLink('');
      setTimeout(() => setMessage(''), 5000);
    }
  };

  const handleChange = (e) => {
    // console.log(e);
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log(value, name);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Meta
        title='Upload PYQs - ninepointer'
        // children={
        //   <>
        //     <link
        //       rel='stylesheet'
        //       href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css'
        //       integrity='sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn'
        //       crossorigin='anonymous'
        //     ></link>
        //     <script
        //       src='https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js'
        //       integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
        //       crossorigin='anonymous'
        //     ></script>
        //     <script
        //       src='https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js'
        //       integrity='sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF'
        //       crossorigin='anonymous'
        //     ></script>
        //   </>
        // }
      />
      <div className={styles.container}>
        <TopBar />
        <div className={styles.sections}>
          <SideBar />
          <div className={styles.pageContent}>
            <div className={styles.containers}>
              <h1>Upload Video </h1>
              <form onSubmit={handleSubmit}>
                <section>
                  <label htmlFor='university'>University</label>
                  <select name='university' onChange={handleChange}>
                    <option value='' disabled selected>
                      Select your option
                    </option>
                    {universities.map((university, index) => {
                      return (
                        <option key={index} value={university.name}>
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
                    <option value='Common'>Common</option>
                    <option value='Computer Science'>Computer Science</option>
                    <option value='Electrical'>Electrical</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Chemical'>Chemical</option>
                    <option value='Civil'>Civil</option>
                    <option value='Mechanical'>Mechanical</option>
                    <option value='Textile'>Textile</option>
                    <option value='Ceramic'>Ceramic</option>
                    <option value='Biomedical'>Biomedical</option>
                    <option value='Metallurgy'>Metallurgy</option>
                    <option value='Metallurgy'>Others</option>
                  </select>
                  <label htmlFor='semester'>Semester</label>
                  <select name='semester' id='semester' onChange={handleChange}>
                    <option value='' disabled selected>
                      Select your option
                    </option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
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
                    <option value='' disabled selected>
                      Select your option
                    </option>
                    <option value='Regular'>Regular</option>
                    <option value='Back'>Back</option>
                    <option value='Both'>Both</option>
                    <option value='Others'>Others</option>
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
                    // value={formData.file}
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
                  {message ? (
                    <Message msg={message} setMessage={setMessage} />
                  ) : null}
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default uploadpyq;
