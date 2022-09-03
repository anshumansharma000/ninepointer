import React, { useState, useEffect } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
const Search = ({ setData, setLoading }) => {
  const [searchPhrase, setSearchPhrase] = useState();

  const searchData = async () => {
    setLoading(true);
    console.log('fetching...');
    const res = await axios.get(
      `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video?search=${searchPhrase}`
    );
    setData(res.data.data);
    console.log(searchPhrase);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Search videos by title or subject'
        value={searchPhrase}
        onChange={(e) => {
          setSearchPhrase(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            searchData();
          }
        }}
      />
      <span>
        <button onClick={searchData}>
          <FaSearch size={18} color='#0875F7' />
        </button>
      </span>
    </div>
  );
};

export default Search;
