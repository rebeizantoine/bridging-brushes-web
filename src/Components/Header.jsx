import React, { useState, useEffect } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaBars, FaTimes } from "react-icons/fa";
import BrushLogopng from "../Images/HR_White.png";
import BrushLogopng2 from "../Images/image 4.png";
import "../Styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const [showIntro, setShowIntro] = useState(location.pathname === "/");

  const handleNavigation = (path) => {
    setShowSidebar(false);
    navigate(path);
  };

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2000); // same as before

      return () => clearTimeout(timer);
    } else {
      setShowIntro(false); // no intro if not homepage
    }
  }, [location.pathname]);
  return (
    <div>
      {showIntro && (
        <div className="logo-intro">
          <img
            src={BrushLogopng}
            alt="Bridging Brushes Logo"
            className="intro-logo"
          />
        </div>
      )}
      <div className="header-box">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="header-all">
          <div className="header-title" onClick={() => navigate(`/`)}>
            <img
              src={BrushLogopng}
              className="steel-city"
              alt="Brush Logo"
              onClick={() => navigate(`/`)}
            />
          </div>
          <div className="header-center">
            <div className="header-1">
              <nav className="navigado">
                <ul className="header-ul">
                  <li className="hideOnMobile">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="hideOnMobile">
                    <Link className="weird-blue" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="hideOnMobile">
                    <Link to="/artists">Artists</Link>
                  </li>
                  <li className="hideOnMobile">
                    <Link className="weird-blue" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li className="hideOnMobile">
                    <Link to="/contactus">Contact</Link>
                  </li>
                </ul>
              </nav>
              {showSidebar && (
                <nav className="bigger-1">
                  <ul className="sidebar123">
                    <li onClick={() => setShowSidebar(false)}>
                      <a href="#">
                        <svg
                          className="svg-white"
                          xmlns="http://www.w3.org/2000/svg"
                          height="26"
                          viewBox="0 0 24 24"
                          width="26"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="#FFFFFF"
                            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.41l4.89 4.89-4.88 4.89a1 1 0 0 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.88-4.89a1 1 0 0 0 0-1.4z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="/" onClick={() => handleNavigation("/")}>
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects"
                        onClick={() => handleNavigation("/projects")}
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="/artists"
                        onClick={() => handleNavigation("/artists")}
                      >
                        Artists
                      </a>
                    </li>
                    <li>
                      <a
                        href="/aboutus"
                        onClick={() => handleNavigation("/aboutus")}
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contactus"
                        onClick={() => handleNavigation("/contactus")}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
          <div className="header-2">
            <div className="image-circle">
              <img className="phone-image" alt="" />
            </div>
            <div className="menu-button" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                fill="white" // ← add this
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
