import navStyles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaStream } from 'react-icons/fa';
import Dropdown from './Dropdown';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showExtended, setShowExtended] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  const changeNavbarBackground = () => {
    if (window.scrollY > 60) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBackground);
  }, []);

  return (
    <div className={navStyles.extendedNav}>
      <div
        className={
          active ? `${navStyles.active} ${navStyles.nav}` : navStyles.nav
        }
      >
        <div className={navStyles.logo}>
          <Link href='/'>
            <img
              src='assets/images/channels4_profile-removebg-preview.png'
              alt='Logo'
            />
          </Link>
        </div>
        <div className={navStyles.actionIcons}>
          <button
            onClick={() => {
              setShowExtended(!showExtended);
            }}
          >
            <FaStream size={18} />
          </button>
        </div>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/create'>Become a content creator</Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <a
              href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/playlists'
              rel='noopener noreferer'
              target='_blank'
            >
              Browse content
            </a>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <div className={navStyles.highlight}>
              <Link href='/contactus'>Contact</Link>
            </div>
          </li>
        </ul>
        {/* <NavbarItem />
      <NavbarItem /> */}
        {/* <Dropdown /> */}
      </div>
      {showExtended && (
        <div className={navStyles.navItems}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/create'>Create with us</Link>
            </li>
            <li>
              <Link href='https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/playlists'>
                Browse Content
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* {dropdown && <Dropdown />} */}
    </div>
  );
};

export default Navbar;
