import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/aboutus.css";
// import image11 from "../Images/exhibition1.jpg";
import image2 from "../Images/Owner-IMAGE.jpg";

const AboutUs = () => {
  const [aboutData123] = useState({
    abouttext1: `Founded by Danielle Moussalli, Bridging Brushes emerged from her vibrant career in film production across the Middle East, particularly in Lebanon. After relocating to Washington, D.C., Danielle discovered a dynamic art scene that inspired her to shift her focus toward curating and promoting art and cultural projects.`,
    abouttext2: `Established in 2024, Bridging Brushes is dedicated to creating bespoke artistic and cultural events. Collaborating with artists, writers, filmmakers, and designers, we bring each project to life with creativity and purpose, opening new horizons for artists.`,
    abouttext3: `Bridging Brushes is here to forge meaningful connections, find unique opportunities, and reach new audiences. We support artists in thriving and expanding their reach while providing galleries, buyers, and distributors with a reliable partner to handle logistics and ensure each project unfolds seamlessly.`,
    // aboutimg1: image11,
    aboutimg2: image2,
    aboutimg3: null, // Optional fallback for additional images
  });

  const [contactData, setContactData] = useState({
    contact_linkedIn_link: "https://www.linkedin.com/in/danielle-moussalli",
    contact_pinterest_link: "https://www.pinterest.com/example",
    contact_youtube_link: "https://www.youtube.com/@BridgingBrushes/videos",
    contact_instagram_link: "https://www.instagram.com/bridgingbrushes/",
  });

  // Check if contactData is still null
  if (!contactData) {
    return <div>Loading...</div>; // Display loading message until data is fetched
  }

  return (
    <div className="aboutus-container">
      <section className="aboutus-sec-01">
        <div className="aboutus-inner-container">
          <h2 className="aboutus-main-title">About Us</h2>
          <div className="aboutus-content">
            <div className="aboutus-image123">
              <img
                src={aboutData123.aboutimg2}
                alt="Exhibition"
                loading="lazy"
              />
            </div>
            <div className="aboutus-text-box">
              <h3>Welcome to Bridging Brushes</h3>
              <p>{aboutData123.abouttext1}</p>
            </div>
          </div>
          <div className="allsectiones">
            <div className="sectiones2">
              <p className="p-of-the-sectiones2">
                {aboutData123.abouttext2}
                {aboutData123.abouttext3}
              </p>
            </div>
            <div className="sectiones3">
              <p>{aboutData123.abouttext3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-sec-03">
        <div className="aboutus-inner-container">
          <h3 className="aboutus-main-title2">Follow Us</h3>
          <div className="aboutus-content">
            <div className="aboutus-media-info">
              <ul>
                <li>
                  <a
                    href={contactData.contact_instagram_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_linkedin_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_youtube_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-youtube"></i> YouTube
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="aboutus-image123">
              <img
                src={aboutData123.aboutimg1}
                alt="Community"
                loading="lazy"
              />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
