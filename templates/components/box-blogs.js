import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShowBlog({ databoxblog = [] }) {

  let { boxtitle, description, itemlist } = databoxblog
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 15000,

    centerPadding: '15px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };

  return (

    <div className="blog" id="blog">
      <div className="container">
        <div className="blog__text">
          <h2>{boxtitle}</h2>
          <p>{description}</p>
        </div>
        <div className="blog__slider">
          <div>
            <Slider {...settings}>
              {itemlist.map((imgslider, index) => (
                <div className="blog__item" key={index}>
                  <div className="blog__img">
                    <img src={imgslider.img} alt="1" />
                  </div>
                  <div className="blog__infor">
                    <span className="blog__date">{imgslider.date}</span>
                    <span className="blog__job">{imgslider.job}</span>
                  </div>
                  <h3 className="blog__name">{imgslider.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ShowBlog)