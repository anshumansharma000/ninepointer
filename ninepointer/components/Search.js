import React, { useState, useEffect } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io';
const Search = ({ setData, setLoading }) => {
  const [searchPhrase, setSearchPhrase] = useState();

  //   useEffect(() => {
  //     searchData();
  //   }, [searchPhrase]);

  const searchData = async (phrase) => {
    setLoading(true);
    console.log('fetching...');
    console.log(phrase);
    const res =
      phrase != null
        ? await axios.get(
            `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video?search=${phrase}`
          )
        : await axios.get(
            `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video?search=${searchPhrase}`
          );
    setData(res.data);
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
      <divs>
        {searchPhrase && (
          <span>
            <button
              onClick={() => {
                setSearchPhrase('');
                searchData('');
                // console.log(searchPhrase);
              }}
            >
              clear{/* <IoClose size={18} /> */}
            </button>
          </span>
        )}
        <span>
          <button
            onClick={() => {
              searchData();
            }}
          >
            <FaSearch size={18} color='#0875F7' />
          </button>
        </span>
      </divs>
    </div>
  );
};

export default Search;
