import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/single-exhebition.css";
import bannerImage from "../Images/MagaliKatra/image-3-dividedwefall.png";
import image1 from "../Images/FadiChamaa/reception picts/IMG1.jpg";
import image2 from "../Images/FadiChamaa/reception picts/IMG2.jpg";
import image3 from "../Images/FadiChamaa/reception picts/IMG3.jpg";
import image4 from "../Images/FadiChamaa/reception picts/IMG4.JPG";
import image5 from "../Images/FadiChamaa/reception picts/IMG5.jpg";
import image6 from "../Images/FadiChamaa/reception picts/IMG6.jpg";
import image7 from "../Images/FadiChamaa/reception picts/IMG7.JPG";
import image8 from "../Images/FadiChamaa/reception picts/IMG8.jpg";
import image9 from "../Images/FadiChamaa/reception picts/IMG9.jpg";
import image10 from "../Images/FadiChamaa/reception picts/IMG10.jpg";
import image11 from "../Images/FadiChamaa/reception picts/IMG11.JPG";
import image12 from "../Images/FadiChamaa/fadiInvitation.jpg";
import PdfViewer2 from "./PdfViewer2";
const FadiCatalog = "/FadiChamaa.pdf";
// const MagaliBooklet = "/MK-Booklet-Artist.pdf";

const FcExheb = () => {
  const { exhibitionName } = useParams();
  const navigate = useNavigate();
  const imageGallery = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isPitchOpen, setIsPitchOpen] = useState(false);

  const openCatalogue = () => setIsCatalogueOpen(true);
  const closeCatalogue = () => setIsCatalogueOpen(false);

  const openPitch = () => setIsPitchOpen(true);
  const closePitch = () => setIsPitchOpen(false);

  // Static exhibition data
  const exhibition = {
    exhibition_name: `"Mixed Media" - FADI ELCHAMAA`,
    exhibition_description: "TWO DISTINCT UNIVERSE, ONE SAME LANGUAGE: ART",
    exhibition_artist: "Solo Show by Fadi ELChamaa",
    exhibition_opening_hours: "6:00 PM",
    exhibition_closing_hours: "8:00 PM",
    exhibition_inauguration: "February 8th, 2025 6:00PM",
    exhibition_location: "3807 Rhode Island AVE, Brentwood,MD.",
    exhibition_length: "February 8th, 2025 8:00PM",
    exhibition_country: "United States",
    exhibition_city: "3807 Rhode Island AVE, Brentwood,MD",
    sui_generis: {
      title: "Mixed Media – Solo Show by Fadi ELChamaa",
      dates: "February 8th, 2025",
      location: "3807 Rhode Island AVE, Brentwood,MD.",
      about_artist: `“I paint between impulse and intent—what cannot be tamed” (Fadi Elchamaa – Euphoria 2025).
      
      Elchamaa is a pioneer in the technique of layered translucence.
      Elchamaa’s work has been exhibited internationally, including at VOLTA New York (2023), Dubai, Paris, Washington DC, and Abidjan (2023). His paintings are in prominent private and institutional collections.`,
    },
  };

  return (
    <div className="single-exhibition-page1">
      <div
        className="banner1"
        style={{
          backgroundImage: `url(${bannerImage})`,
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
                <span className="detail-label">Artist:</span>{" "}
                {exhibition.exhibition_artist}
              </div>
              <div className="detail-item1">
                <span className="detail-label">Inauguration:</span>{" "}
                {exhibition.exhibition_inauguration}
              </div>
              <div className="detail-item1">
                <span className="detail-label">View till:</span>{" "}
                {exhibition.exhibition_length}
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
              <h3>Artist Statement</h3>
              <p>{exhibition.sui_generis.about_artist}</p>
              <button
                className="button-special"
                onClick={() => navigate("/Fadielchamaa")}
              >
                <p>Read More</p>
              </button>
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
          <div className="duo-both">
            <button className="artist-button4" onClick={openCatalogue}>
              View Catalog
            </button>
            <button
              className="artist-button4"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=0pWjGZZt3Ig",
                  "_blank"
                )
              }
            >
              View Interview
            </button>
          </div>
        </div>
      </div>

      {/* Catalogue PDF Viewer */}
      <PdfViewer2
        isOpen={isCatalogueOpen}
        onRequestClose={closeCatalogue}
        pdfUrl={FadiCatalog}
        // title="Exhibition Catalogue"
      />
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default FcExheb;
