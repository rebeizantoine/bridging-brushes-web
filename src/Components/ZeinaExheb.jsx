import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/zeinaexheb.css";
import bannerImage from "../Images/ZeinaNader/image-1-chromatic.png";
import image1 from "../Images/ZeinaNader/IMG1.JPG";
import image2 from "../Images/ZeinaNader/IMG2.JPG";
import image3 from "../Images/ZeinaNader/IMG3.JPG";
import image4 from "../Images/ZeinaNader/IMG4.JPG";
import image5 from "../Images/ZeinaNader/IMG5.JPG";
import image6 from "../Images/ZeinaNader/IMG6.JPG";
import image7 from "../Images/ZeinaNader/IMG7.JPG";
import image8 from "../Images/ZeinaNader/IMG8.JPG";
import image10 from "../Images/ZeinaNader/IMG10.JPG";
import image11 from "../Images/ZeinaNader/IMG11.JPG";
import image9 from "../Images/ZeinaNader/IMG13.JPG";
import image12 from "../Images/ZeinaNader/IMG12.JPG";

import PdfViewer2 from "./PdfViewer2";
const ZeinaCatalog = "/ZN-Catalog.pdf";
// Remove this import: import ZeinaCatalogue from "/ZN-CAtalog.pdf";

const ZeinaExheb = () => {
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
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  const exhibition = {
    exhibition_name: "Chromaticity: A Visual Journey",
    exhibition_description: `"Chromaticity" by Zeina Nader explores the energy and spirit of urban life in Washington, blending it with her Lebanese heritage.`,
    exhibition_artist: "Zeina Nader",
    exhibition_inauguration: "June 6th 2024",
    exhibition_length: "June 30th 2024",
    exhibition_location: "Art District, Washington D.C.",
    exhibition_featured1image: null, // Use `bannerImage` as a fallback
    exhibition_contact_email: "contact@exhibition.com",
    exhibition_contact_phone: "(202) 555-7890",
    about_artist:
      "International award-winning artist Zeina Nader has always followed her passion for painting and writing, believing deeply that all forms of art communicate.Zeina exhibited her work, in solos, duos and collectives, all around the world in cities such as New York, Tokyo, Paris, London, Madrid, Milan, Monaco, Copenhagen and Bruges to name a few. She celebrated in 2022, her hundredth exhibition, which took place in Barcelona.",
    sui_generis: {
      title: "Chromaticity-A Solo Exhibition by Zeina Nader",
      dates: "June 6-30 2024",
      location: "Washington DC",
      about_artist:
        "International award-winning artist Zeina Nader has always followed her passion for painting and writing, believing deeply that all forms of art communicate.Zeina exhibited her work, in solos, duos and collectives, all around the world in cities such as New York, Tokyo, Paris, London, Madrid, Milan, Monaco, Copenhagen and Bruges to name a few. She celebrated in 2022, her hundredth exhibition, which took place in Barcelona.",
    },
    artist_statement: `Inspired by the vibrant chromaticity of the capital city, Zeina Nader's abstract compositions aim to evoke the pulsating energy of urban life in Washington. 
    Growing up in Lebanon, her works reflect the interplay of light and color from the natural world, blending vivid abstraction with cultural resilience. 
    Zeina's works connect her Lebanese roots with the spirit of Washington D.C., offering a kaleidoscope of color that transcends geographical boundaries.`,
  };

  const openPitch = () => setIsPitchOpen(true);
  const closePitch = () => setIsPitchOpen(false);
  const openCatalogue = () => setIsCatalogueOpen(true);
  const closeCatalogue = () => setIsCatalogueOpen(false);

  const takeMeToInterview = () => {
    navigate("https://www.youtube.com/watch?v=i1Q0F-CJfTE");
  };

  return (
    <div className="single-exhibition-page1">
      {/* Banner Section */}
      <div
        className="banner1"
        style={{
          backgroundImage: `url(${
            exhibition.exhibition_featured1image || bannerImage
          })`,
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
                onClick={() => navigate("/ZeinaNader")}
              >
                <p>Read More</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
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
                  "https://www.youtube.com/watch?v=i1Q0F-CJfTE&t=157s",
                  "_blank"
                )
              }
            >
              View Interview
            </button>
          </div>
        </div>
      </div>
      <PdfViewer2
        isOpen={isCatalogueOpen}
        onRequestClose={closeCatalogue}
        pdfUrl={ZeinaCatalog}
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

export default ZeinaExheb;
