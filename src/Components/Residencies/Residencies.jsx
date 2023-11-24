import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import data from '../../utils/slider';
import './Residencies.css';
import 'swiper/css';
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { sliderSetting } from '../../utils/common';

const Residencies = () => {
  return (
    <>
      <div className="head-part">
        <div className="r-head ">
          <h3>Best Choices</h3>
          <h2>Popolar Residencies</h2>
        </div>
      </div>
      <div className="r-Wrapper">
        <div className="innerwidth r-container">
          <Swiper {...sliderSetting}>
            <SliderButtons />
            {data.map((cards, i) => (
              <SwiperSlide key={i}>
                <div className="r-card">
                  <img src={cards.image} alt={cards.name} loading="lazy" />
                  <span className="r-price">
                    <span style={{ color: 'orange' }}>$</span>
                    <span>{cards.price}</span>
                  </span>
                  <div className="redency-title">
                    <h3>{cards.name}</h3>
                    <p>{cards.detail}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Residencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="btn-contain">
      <button className="btn1" onClick={() => swiper.slidePrev()}>
        <MoveLeft color="#0ea2ec" strokeWidth={5} absoluteStrokeWidth />
      </button>
      <button className="btn2" onClick={() => swiper.slideNext()}>
        <MoveRight color="#0ea2ec" strokeWidth={5} absoluteStrokeWidth />
      </button>
    </div>
  );
};
