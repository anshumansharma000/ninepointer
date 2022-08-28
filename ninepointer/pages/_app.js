import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { useState, createContext } from 'react';
import SideBarPageContext from '../context/SideBarPageContext';

function MyApp({ Component, pageProps }) {
  const [sideBarPage, setSideBarPage] = useState('dashboard');

  return (
    <Layout>
      <SideBarPageContext.Provider
        value={{ sideBarPage: sideBarPage, setSideBarPage: setSideBarPage }}
      >
        <Component {...pageProps} />
      </SideBarPageContext.Provider>
    </Layout>
  );
}

export default MyApp;
