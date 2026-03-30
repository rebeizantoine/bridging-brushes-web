import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/contactus.css";
import image1 from "../Images/exhibition1.jpg";
import image2 from "../Images/exhibition1.jpg";
import image3 from "../Images/exhibition1.jpg";
import emailjs from "emailjs-com";

const ContactUs = () => {
  useEffect(() => {
    ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });
    ScrollReveal().reveal(
      ".contactus-main-title123, .contactus-section-title123",
      {
        delay: 500,
        origin: "left",
      }
    );
    ScrollReveal().reveal(
      ".contactus-sec-01123 .contactus-image123, .contactus-info123",
      {
        delay: 600,
        origin: "bottom",
      }
    );
    ScrollReveal().reveal(".contactus-text-box123", {
      delay: 700,
      origin: "right",
    });
    ScrollReveal().reveal(".contactus-media-icons123 i", {
      delay: 500,
      origin: "bottom",
      interval: 200,
    });
    ScrollReveal().reveal(
      ".contactus-sec-02123 .contactus-image123, .contactus-sec-03123 img",
      {
        delay: 500,
        origin: "top",
      }
    );
    ScrollReveal().reveal(".contactus-media-info123 li", {
      delay: 500,
      origin: "left",
      interval: 200,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contactus-container123">
      <section className="contactus-sec-01123">
        <div className="contactus-inner-container123">
          <h2 className="contactus-main-title123">Contact Us</h2>
          <div className="contactus-content123">
            <div className="contactus-image123">
              <img src={image1} alt="Exhibition" />
            </div>
            <div className="contactus-text-box123">
              <h3>Get in Touch with Bridging Bridges</h3>
              <p>
                We'd love to hear from you! Whether you have questions about our
                exhibitions, want to collaborate, or just want to say hello,
                feel free to reach out to us.
              </p>
            </div>
          </div>
          <div className="contactus-media-icons123">
            <a href="#" className="contactus-icon123">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="contactus-icon123">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="contactus-icon123">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="contactus-icon123">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="contactus-sec-02123">
        <div className="contactus-inner-container123">
          <h3 className="contactus-section-title123">Contact Form</h3>
          <div className="contactus-content123">
            <div className="contactus-image123">
              <img src={image2} alt="Contact Us" />
            </div>
            <div className="contactus-form-box123">
              <form onSubmit={sendEmail}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <div>
                  <input type="checkbox" id="newsletter" name="newsletter" />
                  <label htmlFor="newsletter">
                    Subscribe to our newsletter
                  </label>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contactus-sec-03123">
        <div className="contactus-inner-container123">
          <h3 className="contactus-section-title123">Follow Us</h3>
          <div className="contactus-content123">
            <div className="contactus-media-info123">
              <ul>
                <li>
                  <a href="#" className="contactus-icon123">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="contactus-icon123">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="contactus-icon123">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="contactus-icon123">
                    <i className="fab fa-youtube"></i> YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="contactus-icon123">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="contactus-image123">
              <img src={image3} alt="Community" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
