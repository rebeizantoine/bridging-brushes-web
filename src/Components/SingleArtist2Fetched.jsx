import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { FaFacebook, FaPinterest, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social media icons
import Slider from "react-slick"; // Import slider component
import "../Styles/singleartist2.css"; // External CSS for styling
import artistImage from "../Images/stock_face6.png";
import image1 from "../Images/exhibition1.jpg";
import image2 from "../Images/exhibition2.jpg";
import image3 from "../Images/exhibition4.jpg";
import Modal from "react-modal";
import PdfViewer from "./PdfViewer"; // Import PdfViewer component

const SingleArtist2Fetched = () => {
  const { artist_name, artist_lastname } = useParams(); // Get URL params
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false); // State for modal visibility

  // Static artist data
  const staticArtistData = {
    artist_name: "Kevin",
    artist_lastname: "Abosch",
    artist_image: artistImage,
    artist_about:
      "Kevin Abosch is an internationally acclaimed artist working across multiple mediums.",
    artist_exhibitions:
      "Notable exhibitions include showcases at The Hermitage Museum, St Petersburg, and the National Museum of China.",
  };

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

  const handleCheckPdfClick = () => {
    setIsPdfModalOpen(true); // Open the PDF modal when the button is clicked
  };

  return (
    <div className="single-artist-container" style={{ position: "relative" }}>
      <div className="single-artist">
        <h3 className="single-artist__title">
          {staticArtistData.artist_name} {staticArtistData.artist_lastname}
        </h3>
        <hr className="single-artist__divider" />
        <div className="single-artist__image-wrapper">
          <img
            className="single-artist__image"
            src={staticArtistData.artist_image}
            alt={`${staticArtistData.artist_name} ${staticArtistData.artist_lastname}`}
          />
        </div>
        <div className="single-artist__info">
          <p className="single-artist__description">
            {staticArtistData.artist_about}
          </p>
          <p className="single-artist__exhibitions">
            {staticArtistData.artist_exhibitions}
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

      {/* Button to trigger PDF modal */}
      <div className="contact-info2">
        <button onClick={handleCheckPdfClick}>
          Check {staticArtistData.artist_name}{" "}
          {staticArtistData.artist_lastname}
          's PDF
        </button>
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

      {/* Pass artistName to the PdfViewer component */}
      <PdfViewer
        isOpen={isPdfModalOpen}
        onRequestClose={() => setIsPdfModalOpen(false)} // Close modal on request
        artistName={`${staticArtistData.artist_name} ${staticArtistData.artist_lastname}`}
      />
    </div>
  );
};

export default SingleArtist2Fetched;
