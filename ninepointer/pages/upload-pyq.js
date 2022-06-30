import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/upload-pyq.module.scss';

const uploadpyq = () => {
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
    // file: '',
  });

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append('file', file);
    fd.append('branch', formData.branch);
    fd.append('semester', formData.semester);
    fd.append('year', formData.year);
    fd.append('type', formData.type);
    fd.append('subject', formData.subject);
    fd.append('university', formData.university);
    fd.append('author', formData.author);
    if (formData.url) fd.append('url', formData.url);

    console.log(fd);

    const response = await axios.post(
      // 'http://localhost:8000/api/v1/engineering/pyq',
      'https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq',
      fd,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    const success = response.status == 200;
    console.log(success);
    console.log(response.data);
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
    <div className={styles.container}>
      <h1>Upload PYQs</h1>
      <form onSubmit={handleSubmit}>
        <section>
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
            <option value='Regular'>Regular</option>
            <option value='Back'>Back</option>
            <option value='Both'>Both</option>
            <option value='Others'>Others</option>
          </select>
          <label htmlFor='university'>University</label>
          <input
            type='text'
            name='university'
            id='university'
            placeholder='University'
            required={true}
            value={formData.university}
            onChange={handleChange}
          />
          <label htmlFor='Author'>Author</label>
          <input
            type='text'
            name='author'
            id='author'
            placeholder='Author'
            required={true}
            value={formData.author}
            onChange={handleChange}
          />
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
          <input
            type='url'
            name='url'
            id='url'
            placeholder='Add link to file'
            value={formData.url}
            onChange={handleChange}
          />
          <input type='submit' />
        </section>
      </form>
    </div>
  );
};

export default uploadpyq;
