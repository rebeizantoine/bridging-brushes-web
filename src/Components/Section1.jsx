import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/section1.css";
import imageplaceholder1 from "../Images/image_placeholder1.png";
import imageplaceholder2 from "../Images/image_placeholder2.png";
import imageplaceholder3 from "../Images/image_placeholder3.png";
import imageplaceholder4 from "../Images/image_placeholder4.png";
import { Helmet } from "react-helmet";
import useIntersectionObserver from "./useIntersectionObserver";
import "../Styles/animations.css"; // Import the animations
import backgroundimage from "../Images/image_placeholder1.png";

const Section1 = () => {
  const [visible, setVisible] = useState(false);
  const ref = useIntersectionObserver(() => setVisible(true), {
    threshold: 0.1,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  };

  return (
    <div
      className={`section-container ${visible ? "visible" : "fade-in"}`}
      ref={ref}
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div class="scroll-watcher"></div>
      {/* <div className="featured-paintings">
          <h2 className="section-h2">Featured Paintings</h2>
        </div> */}
      <Slider {...settings} className="slider-container">
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder1} alt="placeholder 1" />
            <p className="image-text">Image 1 Description</p>
          </div>
        </div>
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder2} alt="placeholder 2" />
            <p className="image-text">Image 2 Description</p>
          </div>
        </div>
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder3} alt="placeholder 3" />
            <p className="image-text">Image 3 Description</p>
          </div>
        </div>
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder4} alt="placeholder 4" />
            <p className="image-text">Image 4 Description</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Section1;
