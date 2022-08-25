





import React from 'react';
import styles from '../styles/videoCard.module.scss';

const VideoCard = (props) => {
  return (
    <>
      <div className={styles.videoCards}>
        <div className={styles.videoCard}> 
          <div className={styles.thumbnail}>
          <a href={props.link} target='_blank'>
          <div className={styles.thumbnailWrapper}><img  src={props.img_src} className={styles.cardThumbnail} /> 
          </div></a>
          </div>
          
          <div className={styles.reference}>
          <a href={props.link} target='_blank'>
            <h3 className={styles.cardTitle}>{props.cardTitle}</h3> </a>
            <br />
            <a href={props.link} target='_blank'>
            <div className={styles.cardDescription}>

              {props.cardDescription}</div> </a>
              <br />
              <span className={styles.cardAuthor}>{props.cardAuthor} </span>
              <br />
              <a href={props.link} target='_blank'>
                <br />
                <br/>
                <br/>
                <div className={styles.button}><span> Watch now</span> </div>
        {/* <div className = {item.props} ></div> */}
              </a>
              <br/>
            </div>{' '}
          </div>
        </div>
      
    </>
  );
};
export default VideoCard;