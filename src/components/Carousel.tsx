import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel({ items }: any) { 

  return (
    <div className='relative h-full m-0 p-0 max-w-full'>
      <Swiper 
        spaceBetween={30}
        navigation={true} 
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[
          // Autoplay,
          Pagination, 
          Navigation]} 
        className="mySwiper w-full h-full"
      >
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index} className='!flex justify-center items-center'>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
