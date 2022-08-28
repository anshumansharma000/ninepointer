import styles from './Layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import Meta from './Meta';
import Dropdown from './Dropdown';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  if (!router.pathname.startsWith('/admin')) {
    return (
      <>
        <Meta />
        <Navbar />
        {/* {dropdown && <Dropdown dropdown={dropdown} setDropdown={setDropdown} />} */}
        <div className={styles.container}>
          <main>{children}</main>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Meta />
        <div className={styles.container}>
          <main>{children}</main>
        </div>
      </>
    );
  }
};

export default Layout;
