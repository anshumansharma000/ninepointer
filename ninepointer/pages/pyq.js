import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/pyq.module.scss';
import PyqCards from '../components/PYQ/PyqCards';
import { universities } from '../data/universities';
import { HashLoader } from 'react-spinners';

const pyq = () => {
  const [searchData, setSearchData] = useState({
    university: '',
    semester: '',
    branch: '',
    subject: '',
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('');

  const [responseData, setResponseData] = useState(null);
  useEffect(() => {}, [responseData]);

  const override = {
    display: 'block',
    margin: '0 auto',
  };

  const handleClick = async () => {
    console.log(searchData.subject);

    const quer = '';

    console.log(searchData.university);
    quer += `?university=${searchData.university}`;
    if (searchData.branch) quer += `&branch=${searchData.branch}`;
    if (searchData.semester) quer += `&semester=${searchData.semester}`;
    if (searchData.subject) quer += `&subject=${searchData.subject}`;

    console.log(quer);

    const query = `?university=${searchData.university}&branch=${searchData.branch}&semester=${searchData.semester}&subject=${searchData.subject}`;
    console.log(query);

    const url = `https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq`;
    const devUrl = 'http://localhost:8000/api/v1/engineering/pyq';
    const queryUrl = url + quer;
    console.log(queryUrl);
    try {
      const response = await axios.get(queryUrl);
      setLoading(true);
      console.log(response.data.data);
      if (response.status === 200) {
        console.log(response.status);
        setResponseData(response.data.data);
        console.log(responseData);
      }
    } catch (err) {
      if (err.response.status === 500) {
        console.log('Something went wrong');
        setMessage('There was a problem with the server. Try again.');
      } else if (err.response.status === 400) {
        console.log(err.response.data.error);
        setMessage(err.response.data.error);
      } else {
        console.log(err.response.data.error);
        setMessage(err.response.data.error);
      }
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSearchData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <section>
        <label htmlFor='university'>University</label>
        <select
          name='university'
          id='university'
          onChange={handleChange}
          required={true}
        >
          <option value='' disabled selected>
            Select your option
          </option>
          {/* <option value='NIT Rourkela'>NIT Rourkela</option>
          <option value='BPUT'>Biju Pattnaik University of Technology</option>
          <option value='IIT Bombay'>IIT Bombay</option>
          <option value='RTU'>Rajasthan Technical University(RTU)</option>
          <option value='VJTU'>VJTU, Mumbai</option>
          <option value='AKTU'>
            Abdul Kalam Technical University, Lucknow
          </option> */}
          {universities.map((university, index) => {
            return (
              <option key={index} value={university.name}>
                {university.name}
              </option>
            );
          })}
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
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          name='subject'
          value={searchData.subject}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </section>

      <section>
        {loading && (
          <HashLoader
            loading={loading}
            color='green'
            size={150}
            cssOverride={override}
          />
        )}
        {responseData &&
          (responseData.length > 0 ? (
            <>
              <PyqCards pyqs={responseData} />
            </>
          ) : (
            <h2>No results found.</h2>
          ))}
      </section>
    </div>
  );
};

export default pyq;
