import VideoCard from '../components/VideoCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const video = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    //fetch data here
    const fetchData = async () => {
      //data fetch
      //set loading to true
      setLoading(true);
      const res = await axios.get(
        `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video`
      );
      console.log(res.data.data);
      setData(res.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Videos</h1>
      {/* {loading && <h2>Loading...</h2>} */}
      <div>
        {data?.map((item, index) => {
          return (
            <>
              <VideoCard
                img_src={item.thumbnail}
                cardTitle={item.title}
                cardDescription={item.description}
                cardAuthor='apple'
                link={item.videoLink}
              />
            </>
          );
        })}
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
