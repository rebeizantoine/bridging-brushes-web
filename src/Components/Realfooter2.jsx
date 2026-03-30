import React from "react";
import "../Styles/realfooter2.css";
import instamini from "../Images/IMAGE-MINI-INSTAGRAM.png";
import linkedInmini from "../Images/IMAGE-MINI-LINKEDIN.png";
import youtubemini from "../Images/IMAGE-MINI-YOUTUBE.png";

const Realfoote2 = () => {
  return (
    <div className="email-signup-container">
      <div className="signup-content1">
        <div className="flex-1">
          <h2 className="stay-in-loop">Stay in the loop</h2>
          <p>Sign up with your email address to receive news and updates</p>
          <form className="signup-form">
            <input
              type="email"
              placeholder="Email Address"
              className="email-input"
              style={{ borderTop: "1px solid #9e9e9e", marginTop: "10px" }}
            />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <div className="contact-info1">
            <div className="contact-info1-1">
              <p>Bridging Brushes LLC</p>
              <p>Potomac, MD 20854</p>
            </div>
            <a
              className="contact-info-a"
              href="mailto:bridgingbrushes@gmail.com"
              style={{ textDecoration: "underline", color: "#406f77" }}
            >
              bridgingbrushes@gmail.com
            </a>
            <p>+1 (202) 702-2507</p>
          </div>
        </div>
        <div className="social-icons">
          <p>Follow us:</p>
          <div className="flex-social-icons">
            <a
              href="https://www.instagram.com/bridgingbrushes"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={instamini} alt="Instagram" />
            </a>
            <a
              href="https://linkedin.com/in/danielle-moussalli"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={linkedInmini} alt="LinkedIn" />
            </a>
            <a
              href="https://www.youtube.com/@BridgingBrushes/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={youtubemini} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      {/* Add BurningBrushes Branding Here */}
      <footer className="footer-branding">
        <p>&copy; BridgingBrushes@2025</p>
      </footer>
    </div>
  );
};

export default Realfoote2;
