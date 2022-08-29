import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'


import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {
    avatar: AVTR2,
    name: 'Juan Pablo Paillet',
    review: "The project went very well, the group met all the requirements that were requested, the page was functional, it had no functionality errors, the database was well connected and the form validations were correct."
  },
  {
    avatar: AVTR1,
    name: 'Juan Pravata',
    review: "The style of the page could be improved, but what we really wanted as teachers was its functionality, it met all the requirements and that is why the page was more than approved."
  },
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt=" "/>
                </div>  
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials