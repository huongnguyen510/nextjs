import React, {memo} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShowTestimonial({ databoxtestimonial = [] }) {

  let { boxtitle, description, itemlist } = databoxtestimonial
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 15000,
    
    centerPadding: '15px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    
    <div className="testimonials" id="testimonial">
      <div className="container">
        <div className="testimonials__text">
          <h2>{boxtitle}</h2>
          <p>{description}</p>
        </div>
        <div className="testimonials__slider">
          <div>
            <Slider {...settings}>    
              {itemlist.map((imgslider,index) =>(
                <div key={index} className="testimonials__item">
                  <div key={index} className="testimonials__inner">
                  <div className="testimonials__img">
                    <img src={imgslider.img} alt="1"/>
                    <div className="testimonials__info">
                      <h3>{imgslider.name}</h3>
                      <p>{imgslider.job}</p>
                    </div>
                  </div>
                  <p>{imgslider.quote}</p>
                </div></div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ShowTestimonial)