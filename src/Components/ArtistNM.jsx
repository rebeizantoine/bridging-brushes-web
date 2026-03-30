import React, { useState } from "react";
import { FaFacebook, FaPinterest, FaLinkedin, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import "../Styles/singleartist2.css";
import image1 from "../Images/NevineMatar/image1-Beyond-LOOKS.png";
import image2 from "../Images/NevineMatar/image2-Antarandabla.png";
import image3 from "../Images/exhibition4.jpg";
import PdfViewer2 from "./PdfViewer2";
import artistImage from "../Images/NevineMatar/nevine-matar-small.png";
const NMBooklet = "/NM-Catalog.pdf";

const ArtistNM = () => {
  const [isPitchOpen, setIsPitchOpen] = useState(true);

  const openPitch = () => setIsPitchOpen(true);
  const closePitch = () => setIsPitchOpen(false);

  const artist = {
    artist_name: "Nevine",
    artist_lastname: "Mattar",
    artist_about: `A Lebanese artist renowned for her diverse artistic skills, Mattar has lived and studied across the globe, absorbing a wide range of artistic influences.`,
    artist_exhibitions: `Her education spans prestigious cities such as Beirut, London, Los Angeles, New York, and Japan. Since 1983, Mattar has held yearly exhibitions worldwide and contributed to murals, illustrations, set designs, and fashion.Mattar is deeply involved in civic activities, including promoting recycling arts, and she played a pivotal role in establishing the first Paper Mache Association in Lebanon. She also chairs art juries and teaches Cultural Studies at leading Lebanese universities, balancing her robust academic and artistic careers.`,
    artist_highlights: `Mattar is deeply involved in civic activities, including promoting recycling arts, and she played a pivotal role in establishing the first Paper Mache Association in Lebanon. She also chairs art juries and teaches Cultural Studies at leading Lebanese universities, balancing her robust academic and artistic careers.`,
  };

  const sliderData = [
    {
      image: image1,
      description: "Beyond Looks Oil & Acrylic on Canvas 39x39",
    },
    {
      image: image2,
      description: "Antar and Abla Oil & Acrylic on Canvas 47x47",
    },
    {
      image: image3,
      description: "Mattar's work exhibited in Tokyo, Japan.",
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
      <div className="kduo">
        <div className="contact-info2">
          <button onClick={openPitch}>
            Check {artist.artist_name}'s Pitch
          </button>
        </div>

        {/* Contact Section */}
        {/* <div className="contact-info">
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
        </div> */}
      </div>

      {/* PDF Viewer Modal */}
      <PdfViewer2
        isOpen={isPitchOpen}
        onRequestClose={closePitch}
        pdfUrl={NMBooklet}
        // title="Mattar's Pitch"
      />
    </div>
  );
};

export default ArtistNM;
