import { useState } from 'react';
import styles from '../styles/Dropdown.module.scss';

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={styles.container}
      //   onMouseEnter={() => {
      //     setDropdown(true);
      //   }}
      //   onMouseLeave={() => {
      //     setDropdown(false);
      //   }}
    >
      <ul
        className={dropdown ? `${styles.clicked}` : ''}
        onClick={() => setDropdown(!dropdown)}
      >
        <li>
          <a href='/content'>Topic Videos</a>
        </li>
        <li>
          <a href='/pyq'>Previous Year Questions (PYQs)</a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/playlists'>
            PYQ Videos
          </a>
        </li>
        <li>
          <a href=''>Engineering Life</a>
        </li>
        <li>
          <a href=''>Explore Universities</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
