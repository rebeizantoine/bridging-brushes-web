import React, { useState } from "react";
import { FaFacebook, FaPinterest, FaLinkedin, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import "../Styles/singleartist2.css";
import artistImage from "../Images/ZeinaNader/zeina-nader-BIG.png.jpg";
import image1 from "../Images/ZeinaNader/image-1-chromatic.png";
import image2 from "../Images/ZeinaNader/image-2-skyline.png";
import image3 from "../Images/ZeinaNader/image-3-seascape.png";
import PdfViewer2 from "./PdfViewer2";
const ZeinaBooklet = "/ZN-Catalog.pdf";

const ArtistZN = () => {
  const [isPitchOpen, setIsPitchOpen] = useState(true);

  const openPitch = () => setIsPitchOpen(true);
  const closePitch = () => setIsPitchOpen(false);

  const artist = {
    artist_name: "Zeina",
    artist_lastname: "Nader",
    artist_about: `International award-winning artist Zeina Nader has always followed her passion for painting and writing, believing deeply that all forms of art communicate.`,
    artist_exhibitions: `Zeina has exhibited her work in solos, duos, and collectives worldwide in cities such as New York, Tokyo, Paris, London, and more. She celebrated her 100th exhibition in 2022 in Barcelona.
      Zeina is also an author of four books and an art columnist for international media outlets. Fluent in five languages, she teaches art to students of all ages.`,
    artist_highlights: `In 2021, her painting was acquired by the Peoria Riverfront Museum in the USA for their permanent collection. In 2023, another painting was acquired by the London School of Economics in the UK. Recently, a large artwork was acquired by the Ritz-Carlton DIFC in Dubai for their main entrance lobby. To Zeina, life itself is the greatest artwork to exist.`,
  };

  const sliderData = [
    {
      image: image1,
      description: "Chromatic Horizon 140 x 80 cmAcrylic on canvas",
    },
    {
      image: image2,
      description: " Chromatic Skylines 150 x 100 cm Acrylic on canvas",
    },
    {
      image: image3,
      description: "Seascape 100 x 80 cmAcrylic on canvas",
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

  return (
    <div className="single-artist-container" style={{ position: "relative" }}>
      <div className="single-artist">
        <h3 className="single-artist__title">
          {artist.artist_name} {artist.artist_lastname}
        </h3>
        <hr className="single-artist__divider" />
        <div className="single-artist__image-wrapper">
          <img
            className="single-artist__image"
            src={artistImage}
            alt={artist.artist_name}
          />
        </div>
        <div className="single-artist__info">
          <p
            className="single-artist__description"
            style={{ color: "#f6f0e6" }}
          >
            {artist.artist_about}
          </p>
          <p
            className="single-artist__exhibitions"
            style={{ color: "#f6f0e6" }}
          >
            {artist.artist_exhibitions}
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
        <button onClick={openPitch}>Check {artist.artist_name}'s Pitch</button>
      </div>

      {/* Contact Section */}
      {/* <div className="contact-info"> */}
      {/* <h4 className="contact-info__title">Contact Me</h4>
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
      </div> */}

      {/* PDF Viewer Modal */}
      <PdfViewer2
        isOpen={isPitchOpen}
        onRequestClose={closePitch}
        pdfUrl={ZeinaBooklet}
        // title="Zeina's Pitch"
      />
    </div>
  );
};

export default ArtistZN;
