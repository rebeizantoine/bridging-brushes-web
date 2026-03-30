import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/realfooter.css";
import verticalwhite from "../Images/vertical-lign-white.png";
import facebook from "../Images/facebook.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";
import facebookGif from "../Images/icons8-facebook.gif";
import pinterestGif from "../Images/icons8-pinterest.gif";
import instagramGif from "../Images/icons8-instagram.gif";
import youtubeGif from "../Images/icons8-youtube.gif";

const RealFooter = () => {
  const [hoveredEmoji, setHoveredEmoji] = useState({
    facebook: false,
    pinterest: false,
    instagram: false,
    youtube: false,
  });

  const handleMouseEnter = (emoji) => {
    setHoveredEmoji((prevState) => ({
      ...prevState,
      [emoji]: true,
    }));
  };

  const handleMouseLeave = (emoji) => {
    setHoveredEmoji((prevState) => ({
      ...prevState,
      [emoji]: false,
    }));
  };

  const navigate = useNavigate();

  return (
    <div className="all-footer">
      <div className="footer1">
        <div className="location-footer1">
          <div className="location1">
            <h2>Washington</h2>
            <p></p>
          </div>
          <div className="location1">
            <h2>D.C.  -  USA</h2>
            <p></p>
          </div>
        </div>
        <div className="copyrightbottom">
          <nav className="navigoo">
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>@2024 BridgingBrushes</li>
              <li>
                <a href="/Contactus">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer2">
        <img src={verticalwhite} alt="Vertical Line" />
      </div>
      <div className="footer3">
        <div className="emojis">
          <nav className="navigoo2">
            <ul>
              {/* 
<li>
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      className="white-emoji"
      onMouseEnter={() => handleMouseEnter("facebook")}
      onMouseLeave={() => handleMouseLeave("facebook")}
      style={{
        backgroundImage: `url(${
          hoveredEmoji.facebook ? facebookGif : facebook
        })`,
        width: `50px`,
        height: `50px`,
      }}
    ></div>
  </a>
</li>

              <li>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="white-emoji"
                    onMouseEnter={() => handleMouseEnter("pinterest")}
                    onMouseLeave={() => handleMouseLeave("pinterest")}
                    style={{
                      backgroundImage: `url(${
                        hoveredEmoji.pinterest ? pinterestGif : pinterest
                      })`,
                      width: `50px`,
                      height: `50px`,
                    }}
                  ></div>
                </a>
              </li>*/}
              <li>
                <a
                  href="https://www.instagram.com/bridgingbrushes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="white-emoji"
                    onMouseEnter={() => handleMouseEnter("instagram")}
                    onMouseLeave={() => handleMouseLeave("instagram")}
                    style={{
                      backgroundImage: `url(${
                        hoveredEmoji.instagram ? instagramGif : instagram
                      })`,
                      width: `50px`,
                      height: `50px`,
                    }}
                  ></div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@BridgingBrushes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="white-emoji"
                    onMouseEnter={() => handleMouseEnter("youtube")}
                    onMouseLeave={() => handleMouseLeave("youtube")}
                    style={{
                      backgroundImage: `url(${
                        hoveredEmoji.youtube ? youtubeGif : youtube
                      })`,
                      width: `50px`,
                      height: `50px`,
                    }}
                  ></div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="stay-up">
          <p style={{ color: "white" }}>
            Stay up-to-date on Bridging Brushes artists, exhibitions, and
            events.
          </p>
        </div>
        <button className="button" onClick={() => navigate("/newsletter")}>
          <span className="span123">SUBSCRIBE</span>
        </button>
      </div>
    </div>
  );
};

export default RealFooter;
