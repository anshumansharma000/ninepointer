import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { trendingVideos } from '../../data/trendingVideos';
import Youtube from './Youtube';

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          //   <div
          //     style={{
          //       width: '150px',
          //       height: '90px',
          //       overflow: 'hidden',
          //       display: 'flex',
          //       gap: '0.7rem',
          //       justifyContent: 'center',
          //     }}
          //   >
          <a>
            {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
            <img
              src={`${trendingVideos[i]['img']}`}
              alt='img'
              width='100px'
              style={{ width: '100%' }}
            />
          </a>
          //   </div>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      pauseOnHover: true,
      autoplay: false,
      autoplaySpeed: 7500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <FaGreaterThan color={'black'} />,
      prevArrow: <FaLessThan color={'black'} />,
    };
    return (
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          marginBottom: '4rem',
        }}
      >
        <div style={{ margin: '0 auto' }}>
          <Slider {...settings}>
            {trendingVideos.map((item, index) => {
              return (
                <div key={index}>
                  <Youtube url={item.url} />
                </div>
              );
            })}
            {/* <div>
            <img src={baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div> */}
          </Slider>
        </div>
        {/* <h2>Custom Paging</h2> */}
      </div>
    );
  }
}
