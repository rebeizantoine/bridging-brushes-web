import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../Styles/scrollrevealcomponent.css";

const ScrollRevealComponent = () => {
  useEffect(() => {
    ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });
    ScrollReveal().reveal(".main-title, .section-title", {
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(".sec-01 .image, .info", {
      delay: 600,
      origin: "bottom",
    });
    ScrollReveal().reveal(".text-box", {
      delay: 700,
      origin: "right",
    });
    ScrollReveal().reveal(".media-icons i", {
      delay: 500,
      origin: "bottom",
      interval: 200,
    });
    ScrollReveal().reveal(".sec-02 .image, .sec-03 img", {
      delay: 500,
      origin: "top",
    });
    ScrollReveal().reveal(".media-info li", {
      delay: 500,
      origin: "left",
      interval: 200,
    });
  }, []);

  return (
    <div>
      <section className="sec-01">
        <div className="container">
          <h2 className="main-title">Reveal Elements On Scroll</h2>
          <div className="content">
            <div className="image">
              <img src="image_placeholder1.png" alt="" />
            </div>
            <div className="text-box">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                repellat aliquam cumque, eum odio enim est magnam omnis harum
                numquam possimus corrupti voluptatibus labore natus vel debitis
                dolore atque quas.
              </p>
            </div>
          </div>
          <div className="media-icons">
            <a href="#" className="icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="sec-02">
        <div className="container">
          <h3 className="section-title">Lorem Ipsum</h3>
          <div className="content">
            <div className="image">
              <img src="image_placeholder2.png" alt="" />
            </div>
            <div className="info">
              <h4 className="info-title">Description</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                repellat aliquam cumque, eum odio enim est magnam omnis harum
                numquam possimus corrupti voluptatibus labore natus vel debitis
                dolore atque quas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-03">
        <div className="container">
          <h3 className="section-title">Lorem Ipsum</h3>
          <div className="content">
            <div className="media-info">
              <ul>
                <li>
                  <a href="#" className="icon">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="icon">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="icon">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="icon">
                    <i className="fab fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="#" className="icon">
                    <i className="fab fa-linkedin"></i> Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="image">
              <img src="image_placeholder3.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollRevealComponent;
