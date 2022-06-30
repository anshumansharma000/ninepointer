import { useState } from 'react';
import axios from 'axios';

const uploadpyq = () => {
  const [formData, setFormData] = useState({
    // user_id: cookies.UserId,
    branch: '',
    semester: '',
    year: '',
    subject: '',
    university: '',
    author: '',
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
    fd.append('subject', formData.subject);
    fd.append('university', formData.university);
    fd.append('author', formData.author);

    console.log(fd);

    const response = await axios.post(
      'http://localhost:8000/api/v1/engineering/pyq',
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
    console.log(e);
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
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor='branch'>Branch</label>
          <input
            type='text'
            name='branch'
            id='branch'
            placeholder='Branch'
            required={true}
            value={formData.branch}
            onChange={handleChange}
          />

          <label htmlFor='semester'>Semester</label>
          <input
            type='text'
            name='semester'
            id='semester'
            placeholder='Semester'
            required={true}
            value={formData.semester}
            onChange={handleChange}
          />

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
          <label htmlFor='type'>type</label>
          <select>
            <option value='Ford'>Ford</option>
            <option value='Volvo' selected>
              Volvo
            </option>
            <option value='Fiat'>Fiat</option>
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
          <input type='submit' />
        </section>
      </form>
    </div>
  );
};

export default uploadpyq;
