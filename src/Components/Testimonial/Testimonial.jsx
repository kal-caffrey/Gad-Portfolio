import React from 'react';
import './Testimonial.css';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";


function Testimonial() {
    const clients = [{

        img: profilePic1,
        review:" Excellent. When it comes to easy-to-use and beautiful websites, Gad is the go-to. His delivery is amazing."

    },
    {

        img: profilePic2,
        review:" My business has received massive engagements with the software solutions he provided me. Gad is all-round quality. I recommend him."

    },
    {

        img: profilePic3,
        review:"He developed our website without hassle. His approach is top-notch. Will definitely keep working with him."

    },
    {

        img: profilePic4,
        review:"Excellent. Gad is the standard when it comes to gorgeous and user-friendly websites. His delivery is fantastic."

    }]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional Work </span>
        <span>from me...</span>
        </div>
       
        <div className='blur t-blur1' style={{background:"var(--purple)"}}></div>
        <div className='blur t-blur2' style={{background:"skyblue"}}></div>
      {/* slider */}

        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination ={{clickable:true}}
           
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                       
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  );
}

export default Testimonial;
