import React from "react";
import "../Styles/new.css";
import imageplaceholder1 from "../Images/image_placeholder1.png";
import imageplaceholder2 from "../Images/image_placeholder2.png";
import imageplaceholder3 from "../Images/image_placeholder3.png";
import imageplaceholder4 from "../Images/image_placeholder4.png";

import { Helmet } from "react-helmet";

const New = () => {
  return (
    <div className="section-container3">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <h2 className="section-title3">Pick of the Day :)</h2>
      <div className="image-container3">
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder1} alt="placeholder 1" />
            <p className="image-text3">Image 1 Description</p>
          </div>
        </div>
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder2} alt="placeholder 2" />
            <p className="image-text3">Image 2 Description</p>
          </div>
        </div>
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder3} alt="placeholder 3" />
            <p className="image-text3">Image 3 Description</p>
          </div>
        </div>
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder4} alt="placeholder 4" />
            <p className="image-text3">Image 4 Description</p>
          </div>
        </div>
      </div>
      <div className="image-container3">
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder4} alt="placeholder 5" />
            <p className="image-text3">Image 5 Description</p>
          </div>
        </div>
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder4} alt="placeholder 6" />
            <p className="image-text3">Image 6 Description</p>
          </div>
        </div>
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder4} alt="placeholder 7" />
            <p className="image-text3">Image 7 Description</p>
          </div>
        </div>
        <div className="image-item3">
          <div className="image-wrapper3">
            <img src={imageplaceholder4} alt="placeholder 8" />
            <p className="image-text3">Image 8 Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
