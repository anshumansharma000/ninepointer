import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
