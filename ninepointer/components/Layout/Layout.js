import styles from './Layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import Meta from './Meta';
import Dropdown from './Dropdown';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
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
};

export default Layout;
