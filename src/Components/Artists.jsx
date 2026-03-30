  import React, { useState, useEffect, useMemo } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  import "../Styles/artists.css";

  const Artists = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchArtists = async () => {
        try {
          const response = await axios.get(
            "https://bridges-backend-ob24.onrender.com/artists"
          );
          setArtists(response.data);
        } catch (error) {
          console.error("Error fetching artists data:", error);
        }
      };

      fetchArtists();
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        const animatedElements = document.querySelectorAll(".animate-on-scroll");
        animatedElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
          const threshold = 200;

          if (rect.top <= windowHeight - threshold) {
            element.classList.add("animated");
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const filteredArtists = useMemo(() => {
      return artists.filter(
        (artist) =>
          artist.artist_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.artist_country
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          artist.artist_arttype.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [searchTerm, artists]);

    const formatNameForURL = (name, lastName) => {
      return `${name.toLowerCase()}/${lastName.toLowerCase()}`;
    };

    return (
      <div>
        <div className="ui-input-container">
          <input
            required
            placeholder="Search for Our Artists..."
            className="ui-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="ui-input-underline"></div>
          <div className="ui-input-highlight"></div>
          <div className="ui-input-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="background-artist">
          <div className="artists-container">
            {filteredArtists.map((artist, index) => (
              <div
                className="box-artist"
                key={index}
                onClick={() =>
                  navigate(
                    `/artists/${formatNameForURL(
                      artist.artist_name,
                      artist.artist_lastname
                    )}`
                  )
                }
              >
                <div className="top-side">
                  <div className="left-image">
                    <img src={artist.artist_image} alt={artist.artist_name} />
                  </div>
                  <div className="right-description">
                    <nav className="artist-nav">
                      <ul>
                        <li>
                          {artist.artist_name} {artist.artist_lastname}
                        </li>
                        <li>
                          {artist.artist_country}, {artist.artist_city}
                        </li>
                        <li>{artist.artist_arttype}</li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="medium-side">
                  <p>{artist.artist_about}</p>
                </div>
                <div className="bottom-side">
                  <h2>Latest Work</h2>
                  <div className="flex-latest-work">
                    <img
                      src={artist.artist_work1}
                      alt={artist.artist_work1name}
                    />
                    {/* <img src={artist.artist_work2} alt={artist.artist_work2name} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Artists;
