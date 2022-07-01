import { useState } from 'react';
import styles from '../styles/Dropdown.module.scss';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
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
        className={
          click
            ? `${styles.clicked} ${styles.dropdownMenu}`
            : styles.dropdownMenu
        }
        onClick={handleClick}
      >
        <li onClick={() => setClick(false)}>
          <a
            href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/videos'
            rel='noopener noreferer'
            target='_blank'
          >
            Topic Videos
          </a>
        </li>
        <li onClick={() => setClick(false)}>
          <a href='/pyq'>PYQs</a>
        </li>
        <li onClick={() => setClick(false)}>
          <a
            href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/playlists'
            rel='noopener noreferer'
            target='_blank'
          >
            PYQ Videos
          </a>
        </li>
        <li onClick={() => setClick(false)}>
          <a
            href='https://www.youtube.com/playlist?list=PLAReQGYWy3mRnwhxXd0MkcbwGR5kMlFoR'
            rel='noopener noreferer'
            target='_blank'
          >
            Engineering Life
          </a>
        </li>
        <li onClick={() => setClick(false)}>
          <a href=''>Explore Universities</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
