import VideoCard from '../components/VideoCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/video.module.scss';

const video = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [branch, setBranch] = useState([]);
  const [type, setType] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    //fetch data here
    fetchData();
  }, [query]);

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
    setData(res.data.data);
    console.log(res.data.data);
    setLoading(false);
  };
  const branchChange = (e) => {
    if (e.target.checked === true) {
      setBranch((prevState) => [...prevState, e.target.name]);
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

  const fetchVideos = async () => {
    setLoading(true);
    console.log(query);
    const res = await axios.get(
      `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video/${query}`
    );
    setData(res.data.data);
    console.log(res.data.data);
    setLoading(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <h1>Filters</h1>
          <div className={styles.filterBox}>
            {branch && <h2>Branch: {branch}</h2>}
            <input
              type='checkbox'
              name='Mechanical'
              id='Mechanical'
              className='branch'
              onChange={branchChange}
            />
            <label for='Mechanical'>Mechanical</label>
            <br />
            <input
              type='checkbox'
              name='Computer Science'
              id='Computer Science'
              className='branch'
              onChange={branchChange}
            />
            <label for='Computer Science'>Computer Science</label>
            <br />
            <input
              type='checkbox'
              name='Electrical'
              id='Electrical'
              className='branch'
              onChange={branchChange}
            />
            <label for='Electrical'>Electrical</label>
            <br />
          </div>
          <div className={styles.filterBox}>
            {type && <h2>Type: {type}</h2>}
            <input
              type='checkbox'
              name='Topic Video'
              id='Topic Video'
              className='type'
              onChange={branchChange}
            />
            <label for='Topic Video'>Topic Video</label>
            <br />
            <input
              type='checkbox'
              name='Engineering Life'
              id='Engineering Life'
              className='type'
              onChange={branchChange}
            />
            <label for='Engineering Life'>Engineering Life</label>
            <br />
            <input
              type='checkbox'
              name='Solution Video'
              id='Solution Video'
              className='type'
              onChange={branchChange}
            />
            <label for='Solution Video'>Solution Video</label>
            <input
              type='checkbox'
              name='Others'
              id='Others'
              className='type'
              onChange={branchChange}
            />
            <label for='Others'>Others</label>
            <br />
          </div>
        </div>
        <div className={styles.videos}>
          <h1>Videos</h1>
          {loading && <h2>Loading...</h2>}
          <div>
            {data?.map((item, index) => {
              return (
                <VideoCard
                  key={index}
                  img_src={item.thumbnail}
                  cardTitle={item.title}
                  cardDescription={item.description}
                  cardAuthor='apple'
                  link={item.videoLink}
                />
              );
            })}
          </div>
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
