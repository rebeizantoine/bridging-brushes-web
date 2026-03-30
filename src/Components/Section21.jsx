import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../Styles/section2.css";
import smallimage4 from "../Images/image_placeholder4.png";
import "../Styles/section21.css"; // Import the animations

const Section21 = () => {
  const [visible, setVisible] = useState(false);
  const [artist1, setArtist1] = useState(null);
  const [artist2, setArtist2] = useState(null);
  const [artist3, setArtist3] = useState(null);
  const [artist4, setArtist4] = useState(null);
  const ref = useRef();
  const navigate = useNavigate();

  const fetchArtist1 = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/artists/featured"
      );
      const featuredArtists = response.data.filter(
        (artist) => artist.featured_on_front
      );
      if (featuredArtists[0]) {
        setArtist1(featuredArtists[0]);
      }
    } catch (error) {
      console.error("Error fetching artist 1:", error);
    }
  };

  const fetchArtist2 = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/artists/featured"
      );
      const featuredArtists = response.data.filter(
        (artist) => artist.featured_on_front
      );
      if (featuredArtists[1]) {
        setArtist2(featuredArtists[1]);
      }
    } catch (error) {
      console.error("Error fetching artist 2:", error);
    }
  };

  const fetchArtist3 = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/artists/featured"
      );
      const featuredArtists = response.data.filter(
        (artist) => artist.featured_on_front
      );
      if (featuredArtists[2]) {
        setArtist3(featuredArtists[2]);
      }
    } catch (error) {
      console.error("Error fetching artist 3:", error);
    }
  };

  const fetchArtist4 = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/artists/featured"
      );
      const featuredArtists = response.data.filter(
        (artist) => artist.featured_on_front
      );
      if (featuredArtists[3]) {
        setArtist4(featuredArtists[3]);
      }
    } catch (error) {
      console.error("Error fetching artist 4:", error);
    }
  };

  useEffect(() => {
    fetchArtist1();
    fetchArtist2();
    fetchArtist3();
    fetchArtist4();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".section2-container");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleReadMore = (artist) => {
    const artistUrl = `/artists/${artist.artist_name.toLowerCase()}/${artist.artist_lastname.toLowerCase()}`;
    navigate(artistUrl);
  };

  return (
    <div className={`section2-container ${visible ? "visible" : ""}`} ref={ref}>
      <div className="top-123">
        <h1 className="main-title">Featured Galleries</h1>
      </div>
      {artist1 && (
        <div className="artist-list">
          <div className="left-artist-des">
            <h2>{`${artist1.artist_name} ${artist1.artist_lastname}`}</h2>
            <p>{artist1.artist_about}</p>
            <button
              className="button-special"
              onClick={() => handleReadMore(artist1)}
            >
              <p>Read More</p>
            </button>
          </div>
          <div className="right-image-des">
            <img
              src={artist1.artist_image || smallimage4}
              alt={artist1.artist_name}
            />
          </div>
          <div className="right-rect">
            <img src={artist1.artist_work1 || smallimage4} alt="" />
          </div>
        </div>
      )}
      {artist2 && (
        <div className="artist-list hideOnMobile1">
          <div className="right-rect4">
            <img src={artist2.artist_work1 || smallimage4} alt="" />
          </div>
          <div className="right-image-des2">
            <img
              src={artist2.artist_image || smallimage4}
              alt={artist2.artist_name}
            />
          </div>
          <div className="left-artist-des2">
            <h2>{`${artist2.artist_name} ${artist2.artist_lastname}`}</h2>
            <p>{artist2.artist_about}</p>
            <button
              className="button-special"
              onClick={() => handleReadMore(artist2)}
            >
              <p>Read More</p>
            </button>
          </div>
        </div>
      )}
      {artist3 && (
        <div className="artist-list">
          <div className="left-artist-des">
            <h2>{`${artist3.artist_name} ${artist3.artist_lastname}`}</h2>
            <p>{artist3.artist_about}</p>
            <button
              className="button-special"
              onClick={() => handleReadMore(artist3)}
            >
              <p>Read More</p>
            </button>
          </div>
          <div className="right-image-des">
            <img
              src={artist3.artist_image || smallimage4}
              alt={artist3.artist_name}
            />
          </div>
          <div className="right-rect">
            <img src={artist3.artist_work1 || smallimage4} alt="" />
          </div>
        </div>
      )}
      {artist4 && (
        <div className="artist-list hideOnMobile1">
          <div className="right-rect4">
            <img src={artist4.artist_work1 || smallimage4} alt="" />
          </div>
          <div className="right-image-des2">
            <img
              src={artist4.artist_image || smallimage4}
              alt={artist4.artist_name}
            />
          </div>
          <div className="left-artist-des2">
            <h2>{`${artist4.artist_name} ${artist4.artist_lastname}`}</h2>
            <p>{artist4.artist_about}</p>
            <button
              className="button-special"
              onClick={() => handleReadMore(artist4)}
            >
              <p>Read More</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section21;
