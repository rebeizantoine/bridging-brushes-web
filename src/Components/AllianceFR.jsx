import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/single-exhebition.css";
import bannerImage from "../Images/exhibition1.jpg";
import image1 from "../Images/AF exhibition/IMG_7317.JPG";
import image2 from "../Images/AF exhibition/IMG_7319.JPG";
import image3 from "../Images/AF exhibition/IMG_7324.JPG";
import image4 from "../Images/AF exhibition/IMG_7329.JPG";
import PdfViewer2 from "./PdfViewer2";
// No need to import the PDF, instead use the path directly
const ArtomaticCatalogue = "/AF-catalog.pdf";

const AllianceExheb = () => {
  const { exhibitionName } = useParams();
  const navigate = useNavigate();
  const imageGallery = [image1, image2, image3, image4];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(true);

  const exhibition = {
    exhibition_name: "Alliance Francaise",
    exhibition_description:
      "Bridging Brushes artists took part of the Avenues of Connections & the Art of Francophone World Exhibition in Washington DC in March 2024.",
    exhibition_dates: "February - March",
    exhibition_location: "Washington, D.C.",
    sui_generis: {
      title:
        "Avenues of Connections & the Art of Francophone World Exhibition:Fadi ELCHAMAA-MARWAN CHAMAA-JANE FASYALL",
      dates: "February - March 2024",
      location: "Washington DC",
      about_artist: `In collaboration with the Alliance Française of Washington DC, Bridging Brushes proudly participated in the Avenues of Connections & The Art of the Francophone World Exhibition held in Washington DC in March 2024. This prestigious event celebrated cultural diversity and artistic expression from Francophone communities around the globe, providing a platform to connect people through the universal language of art.

Three talented artists were carefully selected to represent Bridging Brushes, showcasing their unique perspectives, techniques, and cultural influences. Each piece exhibited tells a story of heritage, identity, and creativity, reflecting the vibrant spirit of the Francophone world.

Discover their captivating work and the powerful narratives behind their creations here!`,
    },
  };

  const openCatalogue = () => setIsCatalogueOpen(true);
  const closeCatalogue = () => setIsCatalogueOpen(false);

  return (
    <div className="single-exhibition-page1">
      <div
        className="banner1"
        style={{
          backgroundImage: `url()`,
        }}
      >
        <div className="banner-content1">
          <h1 className="exhibition-title1">{exhibition.exhibition_name}</h1>
          <div className="info-box1">
            <p className="exhibition-description1">
              {exhibition.exhibition_description}
            </p>
            <div className="exhibition-details1">
              <div className="detail-item1">
                <span className="detail-label">Dates:</span>{" "}
                {exhibition.exhibition_dates}
              </div>
              <div className="detail-item1">
                <span className="detail-label">Location:</span>{" "}
                {exhibition.exhibition_location}
              </div>
            </div>
            <div className="sui-generis-section">
              <h2>{exhibition.sui_generis.title}</h2>
              <p>
                <strong>Dates:</strong> {exhibition.sui_generis.dates}
              </p>
              <p>
                <strong>Location:</strong> {exhibition.sui_generis.location}
              </p>
              <h3></h3>
              <p>{exhibition.sui_generis.about_artist}</p>
              {/*  <button
                className="button-special"
                onClick={() => navigate("/afexheb")}
              >
                <p>Read More</p>
              </button>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="both">
        <div className="image-grid2">
          {imageGallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Exhibition image ${index + 1}`}
              className="grid-image2"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="button-container3">
          <button className="artist-button3" onClick={openCatalogue}>
            View Catalog
          </button>

          <PdfViewer2
            isOpen={isCatalogueOpen}
            onRequestClose={closeCatalogue}
            pdfUrl={ArtomaticCatalogue}
            // title="Exhibition Catalogue"
          />
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default AllianceExheb;
