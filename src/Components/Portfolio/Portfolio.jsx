import React from 'react';
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Slidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css'
import { themeContext } from '../../Context';
import {useContext} from  'react'

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>
      
      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <img style={{height:'250px'}} src={Slidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  style={{height:'250px'}} src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img style={{height:'250px'}} src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img style={{height:'250px'}} src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
