import React, { useState } from "react";
import { FaFacebook, FaPinterest, FaLinkedin, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import "../Styles/singleartist2.css";
import image1 from "../Images/MagaliKatra/image-1-the-happy.png";
import image2 from "../Images/MagaliKatra/image-2-let's-stay.png";
import image3 from "../Images/MagaliKatra/image-3-dividedwefall.png";
import Modal from "react-modal";
import PdfViewer2 from "./PdfViewer2";
import MagaliCatalogue from "../Images/MagaliKatra/Exhibition-Catalog.pdf";
import artistImage from "../Images/MagaliKatra/Magaliportrait.jpg";
const MagaliBooklet = "/MK-Booklet-Artist.pdf";

const ArtistMK = () => {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isPitchOpen, setIsPitchOpen] = useState(true);

  const openCatalogue = () => setIsCatalogueOpen(true);
  const closeCatalogue = () => setIsCatalogueOpen(false);

  const openPitch = () => setIsPitchOpen(true);
  const closePitch = () => setIsPitchOpen(false);

  const artist = {
    artist_name: "Magalie",
    artist_lastname: "Katra",
    artist_about: `Katra's art is visual poetry overflowing with energy and vivacity, with a distinctive signature style.
      The artist captures and highlights human identities, portraying people through bold graphics, assertive postures,
      graceful fluidity, and engaging compositions. With a mastery of graphic rhythm, she holds up a mirror to contemporary
      life and depicts the underlying core of society.`,
    artist_exhibitions: `Katra’s work has been showcased in many galleries, locally and internationally. Her projects include several
      endeavors in Europe and the USA, featuring street art, book illustrations, and fashion design, conveying her vibrant spirit,
      energy, and unique signature.`,
  };

  const sliderData = [
    {
      image: image1,
      description: "The Happy Crowd | 2024 Acrylic on Canvas | 38 x 38  inch",
    },
    {
      image: image2,
      description:
        "Let’s stay together | 2024 Acrylic on Canvas | 38 x 38  inch",
    },
    {
      image: image3,
      description: "Divided we fall | 2024 Acrylic on Canvas | 35  x 47  inch",
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

  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleCheckPdfClick = () => {
    setIsPdfModalOpen(true);
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

      {/* PDF Viewer Modal */}
      <PdfViewer2
        isOpen={isPitchOpen}
        onRequestClose={closePitch}
        pdfUrl={MagaliBooklet}
        // title="Artist's Pitch"
      />
    </div>
  );
};

export default ArtistMK;
