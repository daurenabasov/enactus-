import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import './Swipper,module.css'
import "swiper/css";
import "swiper/css/navigation";
import slide from '../../../assets/slide.png'


const Swipper = () => {
  return (
    <div>
      <Swiper autoplay={true} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img style={{width:'1120px'}} src={slide} alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:'1120px'}} src={slide} alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:'1120px'}} src={slide} alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:'1120px'}} src={slide} alt='alt'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
