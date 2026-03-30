import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import Slider from "react-slick";
import PdfViewer from "./PdfViewer";
import "../Styles/single-artist.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import artistImage from "../Images/stock_face1.png";
import facebook from "../Images/facebook.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";
import facebookGif from "../Images/icons8-facebook.gif";
import pinterestGif from "../Images/icons8-pinterest.gif";
import instagramGif from "../Images/icons8-instagram.gif";
import youtubeGif from "../Images/icons8-youtube.gif";

// Set up Modal's app element
Modal.setAppElement("#root");

const SingleArtist = () => {
  const { artist_name, artist_lastname } = useParams();
  const [artist, setArtist] = useState(null);
  const [hoveredEmoji, setHoveredEmoji] = useState({
    facebook: false,
    pinterest: false,
    instagram: false,
    youtube: false,
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [artistId, setArtistId] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(
          `https://bridges-backend-ob24.onrender.com/artists/artists/${artist_name}/${artist_lastname}`
        );
        setArtist(response.data);
        setArtistId(response.data._id);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtist();
  }, [artist_name, artist_lastname]);

  const handleMouseEnter = (emoji) => {
    setHoveredEmoji((prevState) => ({ ...prevState, [emoji]: true }));
  };

  const handleMouseLeave = (emoji) => {
    setHoveredEmoji((prevState) => ({ ...prevState, [emoji]: false }));
  };

  const openPdfModal = () => {
    setIsPdfModalOpen(true);
  };

  const closePdfModal = () => {
    setIsPdfModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  if (!artist) return <div>Loading...</div>;

  const emojiImages = {
    facebook: hoveredEmoji.facebook ? facebookGif : facebook,
    pinterest: hoveredEmoji.pinterest ? pinterestGif : pinterest,
    instagram: hoveredEmoji.instagram ? instagramGif : instagram,
    youtube: hoveredEmoji.youtube ? youtubeGif : youtube,
  };

  return (
    <div className="sa">
      <div className="sa-all">
        <div className="left-sa">
          <img src={artist.artist_image || artistImage} alt="Artist" />
        </div>
        <div className="right-sa">
          <div className="on-top-sa">
            <h1>
              {artist.artist_name} {artist.artist_lastname}
            </h1>
            <h3>
              {artist.artist_country}, {artist.artist_city}
            </h3>
          </div>
          <div
            className="bottom-sa"
            style={{
              backgroundImage: `url(${artist.artist_work1})`,
              width: `70%`,
              height: `auto`,
            }}
          >
            <p>{artist.artist_about}</p>
          </div>
          <div className="website-sa"></div>
          <div className="emoji-sa">
            <nav className="footer3-sa">
              <ul className="emojis-sa">
                {["facebook", "pinterest", "instagram", "youtube"].map(
                  (emoji) => (
                    <li key={emoji}>
                      <div
                        className="white-emoji-sa"
                        onMouseEnter={() => handleMouseEnter(emoji)}
                        onMouseLeave={() => handleMouseLeave(emoji)}
                        style={{
                          backgroundImage: `url(${emojiImages[emoji]})`,
                          width: `50px`,
                          height: `50px`,
                        }}
                      />
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className="artisto">
              <h2>Artist's Pitch</h2>
              <button className="button-sa1" onClick={openPdfModal}>
                View {artist.artist_name} {artist.artist_lastname}'s Pitch
              </button>
            </div>
            <PdfViewer
              isOpen={isPdfModalOpen}
              onRequestClose={closePdfModal}
              artistId={artistId}
              artistName={`${artist.artist_name} ${artist.artist_lastname}`}
            />
          </div>
        </div>
      </div>
      <div className="static-and-non-sa">
        <div className="linoi"></div>
        <h2>Artist's Latest Work</h2>
        <div className="static-images-sa">
          {[0, 1, 2].map((index) => (
            <img
              key={index}
              src={artist[`artist_work${index + 1}`]}
              alt={artist[`artist_work${index + 1}des`]}
              className={`static-image-sa ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => {
                setActiveSlide(index);
                sliderRef.current.slickGoTo(index);
              }}
            />
          ))}
        </div>
        <div className="gallery-sa">
          <Slider ref={sliderRef} {...settings}>
            {[1, 2, 3].map((index) => (
              <div key={index} className="slide-sa">
                <div className="slide-content-sa">
                  <img
                    src={artist[`artist_work${index}`]}
                    alt={artist[`artist_work${index}des`]}
                    className="painting-image-sa"
                  />
                  <div className="painting-info-sa">
                    <h3>{artist[`artist_work${index}des`]}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SingleArtist;
