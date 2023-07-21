import React from 'react'
// import Swiper core and required modules
// import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quis quasi ab optio blanditiis beatae doloribus molestiae, commodi provident enim aliquid voluptatem pariatur quibusdam perspiciatis laudantium minima. Pariatur, impedit voluptatum.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quis quasi ab optio blanditiis beatae doloribus molestiae, commodi provident enim aliquid voluptatem pariatur quibusdam perspiciatis laudantium minima. Pariatur, impedit voluptatum.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quis quasi ab optio blanditiis beatae doloribus molestiae, commodi provident enim aliquid voluptatem pariatur quibusdam perspiciatis laudantium minima. Pariatur, impedit voluptatum.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quis quasi ab optio blanditiis beatae doloribus molestiae, commodi provident enim aliquid voluptatem pariatur quibusdam perspiciatis laudantium minima. Pariatur, impedit voluptatum.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Rveiew from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={`Avatar number ${index}`} />
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