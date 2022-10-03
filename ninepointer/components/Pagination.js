import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';
import router from 'next/router';

const Pagination = ({ totalPages, setQuery, currentPage, setCurrentPage }) => {
  //   const [currentPage, setCurrentPage] = useState(1);

  const handleClick = () => {
    setQuery((prevState) =>
      prevState == ''
        ? prevState + `?page=${currentPage + 1}`
        : prevState.includes('&page')
        ? prevState.split('&page')[0] + `&page=${currentPage + 1}`
        : prevState + `&page=${currentPage + 1}`
    );
  };

  //   useEffect(() => {
  //     handleClick();
  //   }, [currentPage]);
  return (
    <div className={styles.container}>
      <button
        disabled={currentPage == 1}
        onClick={() => {
          setCurrentPage((prevState) => prevState - 1);
          router.push({
            pathname: '/video',
            query: { page: currentPage - 1 },
          });
        }}
      >
        Previous
      </button>
      <div className={styles.pages}>
        {totalPages < 5 ? (
          [...Array(totalPages)].map((element, index) => {
            return (
              <div
                className={
                  index == currentPage - 1
                    ? `${styles.pageNumber} ${styles.current}`
                    : styles.pageNumber
                }
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  router.push({
                    pathname: '/video',
                    query: { page: index + 1 },
                  });
                }}
              >
                {index + 1}
              </div>
            );
          })
        ) : (
          <div>
            <span>...</span>
            <span
              className={
                index == currentPage - 1
                  ? `${styles.pageNumber} ${styles.current}`
                  : styles.pageNumber
              }
            >
              {currentPage - 1}
            </span>
            <span
              className={
                index == currentPage - 1
                  ? `${styles.pageNumber} ${styles.current}`
                  : styles.pageNumber
              }
            >
              {currentPage}
            </span>
            <span
              className={
                index == currentPage - 1
                  ? `${styles.pageNumber} ${styles.current}`
                  : styles.pageNumber
              }
            >
              {currentPage + 1}
            </span>
            <span>...</span>
          </div>
        )}
      </div>
      <button
        disabled={currentPage == totalPages}
        onClick={() => {
          setCurrentPage((prevState) => prevState + 1);
          router.push({
            pathname: '/video',
            query: { page: currentPage + 1 },
          });
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
