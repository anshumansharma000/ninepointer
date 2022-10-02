import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import Protected from '../components/Protected';
import { useState, createContext } from 'react';
import SideBarPageContext from '../context/SideBarPageContext';
import userContext from '../context/userContext';

function MyApp({ Component, pageProps }) {
  const [sideBarPage, setSideBarPage] = useState('');

  return (
    <Protected>
      <Layout>
        <SideBarPageContext.Provider
          value={{ sideBarPage: sideBarPage, setSideBarPage: setSideBarPage }}
        >
          <Component {...pageProps} />
        </SideBarPageContext.Provider>
      </Layout>
    </Protected>
  );
}

export default MyApp;
