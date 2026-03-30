import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/artists.css";
import gallery1 from "../Images/MagaliKatra/mini-imagem-magali.png";
import gallery2 from "../Images/NevineMatar/nevine-matar-imagem.png";
import gallery3 from "../Images/ZeinaNader/mini-imagem.png";

import pici1 from "../Images/MagaliKatra/magaly-katra-BIG.jpg";
import pici2 from "../Images/NevineMatar/nevine-matar-small.png";

import pici3 from "../Images/ZeinaNader/zeina-nader-BIG.png.jpg";
import pici4 from "../Images/FadiChamaa/FadiChamaapp.png";

const Artists2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([
    {
      _id: "66b12d7fe5591b4a05c8d5e3",
      artist_name: "Magali",
      artist_lastname: "Katra",
      artist_aka: "MK",
      artist_arttype: "Painter",
      artist_image: pici1,
      artist_country: "Lebanon",
      artist_city: "Beirut",
      artist_about:
        "Katra holds a Master's degree in Visual Arts from the Lebanese Academy of Fine\r\nArts in Beirut and continued her studies at the National School of Fine Arts in Paris\r\n(Ecole national superieure des beaux art) and the Duperré Higher School of\r\nApplied Arts in Paris (Ecole Nationale Superieure Duperré).\r\nShe furthered her education with a Master's in Arts Management from the Higher\r\nSchool of Business in Beirut.",
      artist_work1: gallery1,
      artist_work1name: "Letting Go|2021",
      artist_work1des: "Letting Go|2021 60 x 60 Acrylic",
      artist_work2name: "Moving On|2021",
      artist_work2:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1722887548/sqc1dofnoxd0bwflktji.png",
      artist_work2des: "Moving On| 2021 75 x 75 Acrylic on Canvas",
      artist_work3name: "Among Them|2021",
      artist_work3:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1722887550/g6wpp8elhwifbgcptiu5.png",
      artist_work3des: "Among Them| 2021 75 x 75 Acrylic on Canvas",
      artist_pdf: "uploads/pdfs/Magali-Katra-Magali_Pitch_bb_2024.pdf",
      featured_on_front: false,
      artist_pitch: null,
      __v: 0,
    },
    {
      _id: "66b5c4d5e5591b4a05c8ddc9",
      artist_name: "Zeina",
      artist_lastname: "Nader",
      artist_aka: "AR",
      artist_arttype: "Painter",
      artist_image: pici3,
      artist_country: "Lebanon",
      artist_city: "Beirut",
      artist_about:
        "Katra holds a Master's degree in Visual Arts from the Lebanese Academy of Fine Arts in Beirut and continued her studies at the National School of Fine Arts in Paris (Ecole national superieure des beaux art) and the Duperré Higher School of Applied Arts in Paris (Ecole Nationale Superieure Duperré). She furthered her education with a Master's in Arts Management from the Higher School of Business in Beirut.",
      artist_work1: gallery3,
      artist_work1name: "Letting Go|2021",
      artist_work1des: "Among Them| 2022 75 x 75 Acrylic on Canvas",
      artist_work2name: "Moving On|2021",
      artist_work2:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1723188437/wvcvhawqalk72ptsmm98.jpg",
      artist_work2des: "Among Them| 2022 75 x 75 Acrylic on Canvas",
      artist_work3name: "Among Them|2021",
      artist_work3:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1723188437/fglwzzveucoyuez8zjcv.jpg",
      artist_work3des: "Among Them| 2022 75 x 75 Acrylic on Canvas",
      artist_pdf: "uploads/pdfs/Antoine-Rebeiz-magapay.pdf",
      featured_on_front: true,
      artist_pitch: null,
      __v: 0,
    },
    {
      _id: "6738b77760c87052d2055bad",
      artist_name: "Nevine",
      artist_lastname: "Mattar",
      artist_aka: "MK",
      artist_arttype: "Painter",
      artist_image: pici2,
      artist_country: "Lebanon",
      artist_city: "Beirut",
      artist_about:
        "Katra holds a Master's degree in Visual Arts from the Lebanese Academy of Fine\\r\\nArts in Beirut and continued her studies at the National School of Fine Arts in Paris\\r\\n(Ecole national superieure des beaux art) and the Duperré Higher School of\\r\\nApplied Arts in Paris (Ecole Nationale Superieure Duperré).\\r\\nShe furthered her education with a Master's in Arts Management from the Higher\\r\\nSchool of Business in Beirut.",
      artist_work1: gallery2,
      artist_work1name: "Letting Go|2021",
      artist_work1des: "Letting Go|2021 60 x 60 Acrylic",
      artist_work2name: "Letting Go|2021",
      artist_work2:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1731770230/vcfk1hwe2lf7qnnsvp7l.png",
      artist_work2des: "Letting Go|2021 60 x 60 Acrylic",
      artist_work3name: "Among Them|2021",
      artist_work3:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1731770230/a4chsyioazrofxwekrxg.png",
      artist_work3des: "Among Them| 2022 75 x 75 Acrylic on Canvas",
      artist_pdf: "uploads/pdfs/Magali-Katra2-Antoine Rebeiz Sololearn.pdf",
      featured_on_front: false,
      artist_pitch: null,
      __v: 0,
    },
    {
      _id: "6738b77760c87052d2055bad",
      artist_name: "Fadi",
      artist_lastname: "ELChamaa",
      artist_aka: "MK",
      artist_arttype: "Painter",
      artist_image: pici4,
      artist_country: "Lebanon",
      artist_city: "Beirut",
      artist_about:
        "Katra holds a Master's degree in Visual Arts from the Lebanese Academy of Fine\\r\\nArts in Beirut and continued her studies at the National School of Fine Arts in Paris\\r\\n(Ecole national superieure des beaux art) and the Duperré Higher School of\\r\\nApplied Arts in Paris (Ecole Nationale Superieure Duperré).\\r\\nShe furthered her education with a Master's in Arts Management from the Higher\\r\\nSchool of Business in Beirut.",
      artist_work1: gallery2,
      artist_work1name: "Letting Go|2021",
      artist_work1des: "Letting Go|2021 60 x 60 Acrylic",
      artist_work2name: "Letting Go|2021",
      artist_work2:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1731770230/vcfk1hwe2lf7qnnsvp7l.png",
      artist_work2des: "Letting Go|2021 60 x 60 Acrylic",
      artist_work3name: "Among Them|2021",
      artist_work3:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1731770230/a4chsyioazrofxwekrxg.png",
      artist_work3des: "Among Them| 2022 75 x 75 Acrylic on Canvas",
      artist_pdf: "uploads/pdfs/Magali-Katra2-Antoine Rebeiz Sololearn.pdf",
      featured_on_front: false,
      artist_pitch: null,
      __v: 0,
    },
  ]);
  const navigate = useNavigate();

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
  const hardCodedRoutes = [
    "/MagaliKatra",
    "/ZeinaNader",
    "/NevineMattar",
    "/Fadielchamaa",
  ]; // Define specific routes
  const handleNavigate = (index) => {
    const route = hardCodedRoutes[index] || "/"; // Fallback to "/" if no route exists for this index
    navigate(route);
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
              onClick={() => handleNavigate(index)}
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
                      {/* <li>
                        {artist.artist_country}, {artist.artist_city}
                      </li> */}
                      {/* <li>{artist.artist_arttype}</li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="medium-side">
                <p>{artist.artist_about}</p>
              </div>
              {/* <div className="bottom-side">
                <h2>Latest Work</h2>
                <div className="flex-latest-work">
                  <img
                    src={artist.artist_work1}
                    alt={artist.artist_work1name}
                  />
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists2;
