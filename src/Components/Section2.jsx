import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../Styles/section2.css";
import smallimage4 from "../Images/image_placeholder4.png";
import greenrect from "../Images/green rectangle.png";
import "../Styles/animations.css"; // Import the animations

const Section2 = () => {
  const [visible, setVisible] = useState(false);
  const [artists, setArtists] = useState([]);
  const ref = useRef();

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/artists/featured"
        );
        const featuredArtists = response.data.filter(
          (artist) => artist.featured_on_front
        );
        setArtists(featuredArtists);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-right, .delay-2"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      className={`section2-container ${visible ? "visible" : "fade-in"}`}
      ref={ref}
    >
      {artists.map((artist, index) => (
        <div
          key={artist._id}
          className={`artist-list animate-on-scroll delay-${index + 1}`}
        >
          <div className="left-artist-des">
            <h2>{`${artist.artist_name} ${artist.artist_lastname}`}</h2>
            <p>{artist.artist_about}</p>
            <button className="button-special">
              <p>Read More</p>
            </button>
          </div>
          <div className="right-image-des animate-on-scroll delay-2">
            <img
              src={artist.artist_image || smallimage4}
              alt={artist.artist_name}
            />
          </div>
          <div className="right-rect animate-on-scroll delay-3">
            <img src={greenrect} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
