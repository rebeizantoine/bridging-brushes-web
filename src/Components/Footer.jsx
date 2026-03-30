import React from "react";
import "../Styles/footer.css";
import "modern-css-reset/dist/reset.min.css";
import imageholder from "../Images/image_placeholder1.png";

const Footer = () => {
  return (
    <div>
      {" "}
      <section className="wrapper4">
        <div className="container4">
          <div className="img__container4">
            <img src={imageholder} alt="salad" className="img" />
          </div>
          <div className="content4">
            <h2 className="subtitle4">Subscribe today</h2>
            <h1 className="title4">Never miss a recipe</h1>
            <input
              type="text"
              className="mail4"
              placeholder="Your email address"
              name="mail"
              required
            />
            <input type="submit" value="Subscribe" className="subscribe4" />
            <p className="text">
              We won’t send you spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
