import VideoCard from '../components/Video/VideoCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/video.module.scss';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import { useRouter } from 'next/router';

const video = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [branch, setBranch] = useState([]);
  const [type, setType] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  useEffect(() => {
    //fetch data here
    fetchData();
  }, [query]);

  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.page);
    console.log(query.split('&page'));
    if (router.query.page) {
      setCurrentPage(router.query.page);
      if (!query) {
        setQuery((prevState) => prevState + `?page=${router.query.page}`);
      } else {
        if (query.includes('&page')) {
          setQuery(
            (prevState) =>
              prevState.split('&page')[0] + `&page=${router.query.page}`
          );
        } else if (query.includes('?page')) {
          setQuery(
            (prevState) =>
              prevState.split('?page')[0] + `?page=${router.query.page}`
          );
        } else {
          setQuery((prevState) => prevState + `&page=${router.query.page}`);
        }
      }
    } else {
      setCurrentPage(1);
      if (query.includes('&page')) {
        setQuery((prevState) => prevState.split('&page')[0]);
      } else {
        setQuery((prevState) => prevState.split('?page')[0]);
      }
    }
  }, [router.isReady, router.query]);

  // useEffect(()=>{
  //   fetchData();
  // }, [query]);

  const fetchData = async () => {
    //data fetch
    //set loading to true
    setLoading(true);
    console.log(query);
    const res = await axios.get(
      `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video/${query}`
    );
    // const res = await axios.get(
    //   `http://localhost:8000/api/v1/engineering/video/${query}`
    // );
    setData(res.data);
    console.log(res.data);
    console.log(res.data.data);
    setLoading(false);
  };
  const branchChange = (e) => {
    if (e.target.checked === true) {
      setBranch((prevState) => [...prevState, e.target.name]);
      setCurrentPage(1);
      setQuery((prevState) =>
        query == ''
          ? prevState + `?&${e.target.className}=${e.target.name}`
          : prevState + `&${e.target.className}=${e.target.name}`
      );
      // fetchData();
    } else {
      setBranch((prevState) => prevState.filter((i) => i !== e.target.name));
      setQuery((prevState) =>
        prevState.replace(`&${e.target.className}=${e.target.name}`, '') === '?'
          ? ''
          : prevState.replace(`&${e.target.className}=${e.target.name}`, '')
      );
      // fetchData();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <h1>Filters</h1>
          <div className={styles.filterBox}>
            <h2>Branch</h2>
            <div className={styles.filter}>
              <input
                type='checkbox'
                name='Mechanical'
                id='Mechanical'
                className='branch'
                value={branch.includes('mechanical')}
                onChange={branchChange}
              />
              <label htmlFor='Mechanical'>Mechanical</label>
              <br />
            </div>
            <div className={styles.filter}>
              <input
                type='checkbox'
                name='Computer Science'
                id='Computer Science'
                className='branch'
                value={branch.includes('Computer Science')}
                onChange={branchChange}
              />
              <label htmlFor='Computer Science'>Computer Science</label>
              <br />
            </div>
            <div className={styles.filter}>
              <input
                type='checkbox'
                name='Electrical'
                id='Electrical'
                className='branch'
                onChange={branchChange}
              />
              <label htmlFor='Electrical'>Electrical</label>
              <br />
            </div>
          </div>
          <div className={styles.filterBox}>
            {type && <h2>Type{type}</h2>}
            <div className={styles.filter}>
              <input
                type='checkbox'
                name='Topic Video'
                id='Topic Video'
                className='type'
                onChange={branchChange}
              />
              <label htmlFor='Topic Video'>Topic Video</label>
              <br />
            </div>
            <div className={styles.filter}>
              <input
                type='checkbox'
                name='Engineering Life'
                id='Engineering Life'
                className='type'
                onChange={branchChange}
              />
              <label htmlFor='Engineering Life'>Engineering Life</label>
              <br />
            </div>
            <div className={styles.filter}>
              <input
                type='checkbox'
                name='Solution Video'
                id='Solution Video'
                className='type'
                onChange={branchChange}
              />
              <label htmlFor='Solution Video'>Solution Video</label>
              <br />
            </div>
            <div className={styles.filter}>
              <input
                type='checkbox'
                name='Others'
                id='Others'
                className='type'
                onChange={branchChange}
              />
              <label htmlFor='Others'>Others</label>
              <br />
            </div>
          </div>
        </div>
        <div className={styles.videos}>
          <Search setData={setData} setLoading={setLoading} />
          {loading && <h2>Loading...</h2>}
          <div>
            {data?.data?.map((item, index) => {
              return (
                <VideoCard
                  key={index}
                  img_src={item.thumbnail}
                  cardTitle={item.title}
                  cardDescription={item.description}
                  cardAuthor={item.creator}
                  link={item.videoLink}
                />
              );
            })}
          </div>
          {data?.count > data?.results && (
            <Pagination
              totalPages={Math.floor(data.count / 10 + 1)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setQuery={setQuery}
            />
          )}
        </div>
      </div>

      {/* <VideoCard
        img_src='https://placeit.net/c/design-templates/stages/youtube-thumbnail-maker-tips-to-survive-the-back-to-school-season-4796e'
        cardTitle=' Learn Web Development'
        cardDescription='this video enables you to learn web dev from grass root level and gradually touch the skies.'
        cardAuthor='apple'
        link='https://drive.google.com/file/d/16su5NEKPbQFqO0OT0EyTkigKDiXpLKDg/view?usp=sharing'
      />
      <VideoCard
        img_src='https://placeit.net/c/design-templates/stages/youtube-thumbnail-maker-tips-to-survive-the-back-to-school-season-4796e'
        cardTitle=' Learn Web Development'
        cardDescription='this video enables you to learn web dev from grass root level and gradually touch the skies.'
        cardAuthor='apple'
        link='https://drive.google.com/file/d/16su5NEKPbQFqO0OT0EyTkigKDiXpLKDg/view?usp=sharing'
      /> */}
    </>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   //   setLoading(true);
//   const res = await axios.get(
//     `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video`
//   );
//   const data = await res.data.data;
//   //   loading = true;
//   //   setLoading(false);
//   // Pass data to the page via props
//   return { props: { data } };
// }

// should be added
// should be
// asdfghj
// sdfghjkl
export default video;
