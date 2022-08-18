import VideoCard from '../components/VideoCard';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

const vdo = () => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    
    const fetchData = async () => {
      
      setLoading();
      const response = await axios.get(
        `https://ninepointer-staging.herokuapp.com/api/v1/engineering/video`
      );
      console.log(res.data.data);
      setData(response.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <VideoCard
        img_src='https://images.pexels.com/photos/1987151/pexels-photo-1987151.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        cardTitle=' Learn Web Development'
        cardDescription='this video enables you to learn web dev from grass root level and gradually touch the skies.'
        cardAuthor='apple'
        link='https://drive.google.com/file/d/16su5NEKPbQFqO0OT0EyTkigKDiXpLKDg/view?usp=sharing'
      />
      <VideoCard
        img_src='https://images.pexels.com/photos/1987151/pexels-photo-1987151.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        cardTitle=' Learn Web Development'
        cardDescription='this video enables you to learn web dev from grass root level and gradually touch the skies.'
        cardAuthor='apple'
        link='https://drive.google.com/file/d/16su5NEKPbQFqO0OT0EyTkigKDiXpLKDg/view?usp=sharing'
      />
    </>
  );
};

// should be added 
// should be done

export default vdo;