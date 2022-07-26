import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import PyqTile from './PyqTile';

const Pyqs = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(
      'https://ninepointer-staging.herokuapp.com/api/v1/engineering/pyq'
    );
    setData(res.data.data);
    setLoading(false);
  };
  return (
    <>
      <h2>Pyq section</h2>
      {loading && <h1>Loading...</h1>}
      <div>
        <div>
          {data?.map((item, index) => {
            return (
              <>
                <PyqTile key={index} pyq={item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pyqs;
