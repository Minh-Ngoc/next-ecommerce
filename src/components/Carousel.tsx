import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Image } from '@nextui-org/react';
import bgImage2 from '@/assets/imgs/bg-login-2.jpg';
import bgImage1 from '@/assets/imgs/bg-login-1.jpg';
import bgImage from '@/assets/imgs/bg-login.jpg';

export default function Carousel() { 

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
        modules={[Autoplay, Pagination, Navigation]} 
        className="mySwiper w-4/5 h-full"
      >
        <SwiperSlide className='!flex justify-center items-center'>
          <Image loading="lazy" className='w-full flex-1 h-full max-h-[600px] object-scale' removeWrapper src={bgImage2.src} />
        </SwiperSlide>
        <SwiperSlide className='!flex justify-center items-center'>
          <Image loading="lazy" className='w-full flex-1 h-full max-h-[600px] object-scale' removeWrapper src={bgImage1.src} />
        </SwiperSlide>
        <SwiperSlide className='!flex justify-center items-center'>
          <Image loading="lazy" className='w-full flex-1 h-full max-h-[600px] object-scale' removeWrapper src={bgImage.src} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
