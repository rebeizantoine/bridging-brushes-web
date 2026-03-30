import React, { useState } from "react";
import { FaFacebook, FaPinterest, FaLinkedin, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import "../Styles/singleartist2.css";
import artistImage from "../Images/FadiChamaa/Fadi_El_Chamaa.jpeg";
import image1 from "../Images/FadiChamaa/REV1.png";
import image2 from "../Images/FadiChamaa/REV2.png";
import image3 from "../Images/FadiChamaa/REV3.png";
import PdfViewer2 from "./PdfViewer2";
const ZeinaBooklet = "/FadiChamaa.pdf";

const ArtistFC = () => {
  const [isPitchOpen, setIsPitchOpen] = useState(true);

  const openPitch = () => setIsPitchOpen(true);
  const closePitch = () => setIsPitchOpen(false);

  const artist = {
    artist_name: "Fadi",
    artist_lastname: "ELChamaa",
    artist_about: `Fadi Elchamaa (b. 1960, Beirut) is a Lebanese painter whose work demonstrates a sustained and evolving engagement with abstract painting. Over four decades, he has developed a distinct visual language rooted in gesture and chromatic intensity.`,
    artist_exhibitions: `Elchamaa’s work has been exhibited internationally, including at VOLTA New York (2023), Dubai, Paris, Washington DC, and Abidjan (2023). His paintings are in prominent private and institutional collections, including the Ramzi and Saeda Dalloul Art Foundation, R&R Haddad Collection, H&N Abou Chaar Collection, and Serhal Collection. Though rooted in abstraction, they carry an undeniable sense of luminosity, offering an uplifting and immersive experience that lingers.`,
    artist_highlights: `In 2021, her painting was acquired by the Peoria Riverfront Museum in the USA for their permanent collection. In 2023, another painting was acquired by the London School of Economics in the UK. Recently, a large artwork was acquired by the Ritz-Carlton DIFC in Dubai for their main entrance lobby. To Zeina, life itself is the greatest artwork to exist.`,
  };

  const sliderData = [
    {
      image: image1,
      description: "Reverberating Thoughts 29x21 inch Acrylic on paper ",
    },
    {
      image: image2,
      description: " Sewing 29x21 inch Acrylic on paper",
    },
    {
      image: image3,
      description: "Chasing a dragonfly 29x21 inch Acrylic on paper",
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

export default ArtistFC;
