import React from "react";
import imagecircle1 from "../Images/circle-pic-1.jpg";
import imagecircle2 from "../Images/circle-pic-2.jpg";
import imagecircle3 from "../Images/circle-pic-3.jpg";
import imagecircle4 from "../Images/circle-pic-4.jpg";
import "../Styles/welcometo.css";

const Welcome = () => {
  return (
    <div className="welcome-section">
      <section id="bridging-brushes" className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to Bridging Brushes</h1>
          <p>
            A place where creativity meets diversity, inspiring connections and
            enriching perspectives through art and culture.
          </p>
        </div>
        <div className="image-circle-group">
          <img src={imagecircle1} alt="Art" className="circle-image" />
          <img src={imagecircle2} alt="Film" className="circle-image large" />
          <img
            src={imagecircle3}
            alt="Writing"
            className="circle-image larger"
          />
          <img
            src={imagecircle4}
            alt="Music"
            className="circle-image largest"
          />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
