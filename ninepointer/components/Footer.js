// import footerStyles from '../styles/Footer.module.css';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className={footerStyles.container}>
//       <div className={footerStyles.top}>
//         <div className={footerStyles.logo}>
//           <img
//             src='/images/channels4_profile-removebg-preview.png'
//             alt='Logo'
//           />
//           <p>Ninepointer Educational Services</p>
//         </div>
//         <div className={footerStyles.address}>
//           <h4>Address</h4>
//           <p>23/16, MRP Street, MG Road, New Delhi -08, New Delhi, India</p>
//         </div>
//         <div className={footerStyles.links}>
//           <h4>Links</h4>
//           <ul>
//             <li>
//               <Link href='/about'>About Us</Link>
//             </li>
//             <li>
//               <Link href='/careers'>Careers</Link>
//             </li>
//             <li>
//               <Link href='/contact'>Contact</Link>
//             </li>
//             <li>
//               <Link href='/terms'>Terms and Conditions</Link>
//             </li>
//             <li>
//               <Link href='/faqs'>FAQs</Link>
//             </li>
//           </ul>
//         </div>
//         <div className={footerStyles.contact}>
//           <h4>Contact</h4>
//           <div>
//             <label htmlFor='Email'>Subscribe for updates</label>
//             <input type='text' placeholder='Your email' />
//           </div>
//           <div>
//             <ul>
//               <li>
//                 <Link href='https://www.twitter.com/ninepointer'>Twitter</Link>
//               </li>
//               <li>
//                 <Link href='https://www.instagram.com/ninepointer'>
//                   Instagram
//                 </Link>
//               </li>
//               <li>
//                 <Link href='https://www.youtube.com/channel/ninepointer'>
//                   Youtube
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className={footerStyles.bottom}>
//         <p>© 2022 Ninepointer. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import footerStyles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.top}>
        <div className={footerStyles.logo}>
          {/* <img src='assets/images/logo.png' alt='Logo' /> */}
          <h3>ninepointer</h3>
          <p>
            ninepointer is a platform where students can access course content
            uploaded by others just like them with a deep insight on subjects.
          </p>
        </div>
        <div className={footerStyles.links}>
          <h3>Useful links</h3>
          <ul>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              <Link href='/blog'>Latest Blog</Link>
            </li>
            <li>
              <Link href='/career'>Career</Link>
            </li>
          </ul>
        </div>
        <div className={footerStyles.website}>
          <h3>Website</h3>
          <ul>
            <li>
              <Link href='/terms'>Terms of Use</Link>
            </li>
            <li>
              <Link href='/privacy'>Privacy policy</Link>
            </li>
            <li>
              <Link href='/copyright'>Copyright Policy</Link>
            </li>
            <li>
              <Link href='/support'>Support</Link>
            </li>
            <li>
              <Link href='/faqs'>FAQs</Link>
            </li>
          </ul>
        </div>
        <div className={footerStyles.contact}>
          <h3>Contact Us</h3>
          <div>
            <ul>
              <li>+91-9999999999</li>
              <li>hello@ninepointer.com</li>
              <li>Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={footerStyles.bottom}>
        <p>© 2022 ninepointer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
