import React, { useState } from "react";
import { FaFacebook, FaPinterest, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social media icons
import Slider from "react-slick"; // Import slider component
import "../Styles/singleartist2.css"; // External CSS for styling
import artistImage from "../Images/stock_face6.png";
import image1 from "../Images/exhibition1.jpg";
import image2 from "../Images/exhibition2.jpg";
import image3 from "../Images/exhibition4.jpg";
import Modal from "react-modal";

const SingleArtist2 = () => {
  const sliderData = [
    {
      image: image1,
      description:
        "Kevin Abosch's photography installation at The Hermitage Museum, St Petersburg.",
    },
    {
      image: image2,
      description:
        "A sculpture exhibition by Kevin Abosch at the National Museum of China.",
    },
    {
      image: image3,
      description:
        "Kevin Abosch's blockchain-themed art showcased at ZKM in Germany.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Adding state for the button click (optional)
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleHelloThereClick = () => {
    setButtonClicked(true);
    alert("Hello There!"); // You can customize this action as needed
  };

  return (
    <div className="single-artist-container" style={{ position: "relative" }}>
      <div className="single-artist">
        <h3 className="single-artist__title">KEVIN ABOSCH</h3>
        <hr className="single-artist__divider" />
        <div className="single-artist__image-wrapper">
          <img
            className="single-artist__image"
            src={artistImage}
            alt="Kevin Abosch"
          />
        </div>
        <div className="single-artist__info">
          <p className="single-artist__description">
            Kevin Abosch (born 1969) is an Irish conceptual artist known for his
            works in photography, sculpture, installation, AI, blockchain, and
            film. Abosch's work addresses the nature of identity, value, and
            human currency.
          </p>
          <p className="single-artist__exhibitions">
            He has been exhibited throughout the world, often in civic spaces,
            including The Hermitage Museum, St Petersburg, The National Museum
            of China, The National Gallery of Ireland, The Irish Museum of
            Modern Art, The Museum of Contemporary Art Vojvodina, The Bogotá
            Museum of Modern Art, ZKM (Zentrum für Kunst und Medien) and Dublin
            Airport.
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="slider-item">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="slider-image"
              />
              <p className="slider-description">{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="contact-info2">
        <button className="buttonn">Check Kevin's PDF</button>
      </div>
      {/* Contact Section */}
      <div className="contact-info">
        <h4 className="contact-info__title">Contact Me</h4>
        <div className="contact-info__icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info__icon"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info__icon"
            aria-label="Pinterest"
          >
            <FaPinterest />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info__icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info__icon"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleArtist2;
