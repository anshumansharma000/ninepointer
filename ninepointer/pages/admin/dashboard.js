import React, { useState } from 'react';
import Pyqs from '../../components/Admin/Dashboard/Pyqs';

const dashboard = () => {
  const [view, setView] = useState('pyqs');

  const getView = () => {
    console.log(view);
    if (view == 'pyqs') {
      return <Pyqs />;
    }
  };
  return (
    <>
      {/* <SideBar /> */}
      <main>
        <div>
          <Pyqs />
        </div>
      </main>
    </>
  );
};

export default dashboard;
