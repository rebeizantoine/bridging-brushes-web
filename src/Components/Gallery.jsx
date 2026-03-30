import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/gallery.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Gallery = () => {
  const [gallery1, setGallery1] = useState(null);
  const [gallery2, setGallery2] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://bridges-backend-ob24.onrender.com/gallery/66ad280aec0518d3e5416e6b"
      )
      .then((response) => {
        setGallery1(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the first gallery", error);
      });

    axios
      .get(
        "https://bridges-backend-ob24.onrender.com/gallery/66ad285fec0518d3e5416e6d"
      )
      .then((response) => {
        setGallery2(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching the second gallery", error);
      });
  }, []);

  return (
    <div className="gallery-home">
      <div className="title-gallery-home">
        <div className="top-123">
          <h1 className="main-title">Featured Galleries</h1>
        </div>

        {gallery1 && (
          <div className="gallery-section">
            <div className="text-box">
              <h2 className="gallery-title">{gallery1.gallery_name}</h2>
              <p className="date-time">Date: {gallery1.gallery_date}</p>
              <p className="location">
                City: {gallery1.gallery_city}, Country:{" "}
                {gallery1.gallery_country}
              </p>
              <p className="host">Host: {gallery1.gallery_host}</p>
              <p className="description">{gallery1.gallery_description}</p>
              <p className="featured-artists">
                Featured Artists: {gallery1.gallery_featured_artists1},{" "}
                {gallery1.gallery_featured_artists2},{" "}
                {gallery1.gallery_featured_artists3}
              </p>
            </div>
            <div className="image-gallery1">
              <img src={gallery1.gallery_image} alt={gallery1.gallery_name} />
            </div>
          </div>
        )}

        {gallery2 && (
          <div className="gallery-section reverse">
            <div className="image-gallery2">
              <img src={gallery2.gallery_image} alt={gallery2.gallery_name} />
            </div>
            <div className="text-box">
              <h2 className="gallery-title">{gallery2.gallery_name}</h2>
              <p className="date-time">Date: {gallery2.gallery_date}</p>
              <p className="location">
                City: {gallery2.gallery_city}, Country:{" "}
                {gallery2.gallery_country}
              </p>
              <p className="host">Host: {gallery2.gallery_host}</p>
              <p className="description">{gallery2.gallery_description}</p>
              <p className="featured-artists">
                Featured Artists: {gallery2.gallery_featured_artists1},{" "}
                {gallery2.gallery_featured_artists2},{" "}
                {gallery2.gallery_featured_artists3}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
