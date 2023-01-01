import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import cuong from "../../assets/cuong.png"
import truong from "../../assets/truong.png"
import giang from "../../assets/giang.png"
import img from "../../img/1.png"

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>About</span>
      <span>Our Instructor</span>
          <img src={img} alt="" style={{marginBottom:"50px",marginTop:"30px"}}/>
      <span> Our Team</span>

      {/* slider */}
      <Swiper
        spaceBetween={300}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={cuong} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={giang} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={truong} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
