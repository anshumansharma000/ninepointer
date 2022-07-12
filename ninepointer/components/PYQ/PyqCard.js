import React, { useState } from 'react';
import styles from './PyqCard.module.scss';
import Chip from './Chip/Chip';
import Axios from 'axios';
import FileDownload from 'js-file-download';
import axios from 'axios';
import Router from 'next/router';
import PyqModal from './PyqModal';
const PyqCard = ({ pyq }) => {
  const [showModal, setShowModal] = useState(false);

  const driveDownload = (link) => {
    let arr = link.split('/');
    console.log(arr);
    console.log(arr[5]);
    let id = arr[5];
    let driveDownloadUrl = `https://drive.google.com/uc?id=${id}&export=download`;
    Router.push(driveDownloadUrl);
  };
  const downloadPdf = async (link, name) => {
    try {
      const res = await Axios({
        url: 'https://ninepointer-staging.herokuapp.com/download',
        method: 'POST',
        data: {
          link,
        },
        responseType: 'blob',
      });
      console.log(res);
      FileDownload(res.data, `${name}.pdf`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleModalClick = () => {
    if (pyq.fileLink) {
      setShowModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{pyq.subject}</h3>
        <h3>{pyq.year}</h3>
      </div>
      <div className={styles.chips}>
        <Chip content={pyq.branch} />
        <Chip content={`Sem ${pyq.semester}`} />
        <Chip content={pyq.year} />
        <Chip content={pyq.type} />
        <Chip content={pyq.university} />
      </div>
      <div className={styles.action}>
        <a
          href={
            pyq.solutionLink
              ? pyq.solutionLink
              : 'https://www.youtube.com/playlist?list=PLAReQGYWy3mT-RVghz2dNqITONQAF-5Zj'
          }
          rel='noopener noreferer'
          target='_blank'
        >
          <button className={styles.secondaryBtn}>Solutions</button>
        </a>
        <button className={styles.otherBtn} onClick={handleModalClick}>
          View
        </button>
        <button
          onClick={() => {
            pyq.fileLink[8] == 'd'
              ? driveDownload(pyq.fileLink)
              : downloadPdf(
                  pyq.fileLink,
                  pyq.subject + pyq.semester + pyq.branch
                  // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
                  // 'https://www.google.com'
                );
          }}
        >
          Download PDF
        </button>
        {/* <a href={pyq.fileLink} rel='noopener noreferer' target='_blank'>
          <button>View</button>
        </a> */}
      </div>
      {showModal && (
        <PyqModal link={pyq.fileLink} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default PyqCard;
