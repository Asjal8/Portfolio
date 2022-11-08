import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            laboriosam distinctio ipsa quis, explicabo aperiam, placeat maiores
            beatae exercitationem dolores eos voluptatibus dolor quidem
            laudantium corporis quibusdam harum libero earum nisi at?
            Consequuntur veniam in accusamus quos nihil.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            laboriosam distinctio ipsa quis, explicabo aperiam, placeat maiores
            beatae exercitationem dolores eos voluptatibus dolor quidem
            laudantium corporis quibusdam harum libero earum nisi at?
            Consequuntur veniam in accusamus quos nihil.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
