import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/zeinaexheb.css";
import bannerImage from "../Images/NevineMatar/image2-Antarandabla.png";
import image1 from "../Images/NevineMatar/IMG1.JPG";
import image2 from "../Images/NevineMatar/IMG2.JPG";
import image3 from "../Images/NevineMatar/IMG3.JPG";
import image4 from "../Images/NevineMatar/IMG4.JPG";

import PdfViewer2 from "./PdfViewer2";
// No need to import the PDF, instead use the path directly
const ArtomaticCatalogue = "/NM-Catalog.pdf";

const NevineExheb = () => {
  const navigate = useNavigate();
  const { exhibitionName } = useParams();
  const imageGallery = [image1, image2, image3, image4];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  const exhibition = {
    exhibition_name: "ARTOMATIC 2024 Edition",
    exhibition_description:
      "Bridging Brushes has participated in Artomatic 2024 Washington DC edition with work from Nevine Mattar.",
    exhibition_dates: "April-May 2024",
    exhibition_location: "Washington, D.C.",
    about_artist: `Nevine Mattar, a Lebanese artist renowned for her diverse artistic skills, has lived and studied across the globe, 
      from the Far East to the West, absorbing a wide range of artistic influences. Her education spans several prestigious cities, 
      including Beirut, London, Los Angeles, New York, and Japan. Beyond her artistic endeavors, Mattar is deeply involved in civic activities, 
      particularly in promoting recycling arts, and she played a pivotal role in establishing the first Paper Mache Association in Lebanon. 
      With a robust career that includes chairing art juries, yearly exhibitions worldwide since 1983, and contributions to murals, illustrations, 
      set designs, and fashion, Mattar also dedicates herself to academia, teaching Cultural Studies at leading Lebanese universities. 
      Her academic and teaching career continues to thrive, making her a prominent figure in both the artistic and educational spheres.`,
    sui_generis: {
      title:
        "ARTOMATIC WASHINGTON DC 2024 Edition – Solo Show by Nevine Mattar",
      dates: "April-May 2024",
      location: "Washington DC",
      about_artist: `Nevine Mattar, a Lebanese artist renowned for her diverse artistic skills, has lived and studied across the globe, 
      from the Far East to the West, absorbing a wide range of artistic influences. Her education spans several prestigious cities, 
      including Beirut, London, Los Angeles, New York, and Japan. Beyond her artistic endeavors, Mattar is deeply involved in civic activities, 
      particularly in promoting recycling arts, and she played a pivotal role in establishing the first Paper Mache Association in Lebanon. 
      With a robust career that includes chairing art juries, yearly exhibitions worldwide since 1983, and contributions to murals, illustrations, 
      set designs, and fashion, Mattar also dedicates herself to academia, teaching Cultural Studies at leading Lebanese universities. 
      Her academic and teaching career continues to thrive, making her a prominent figure in both the artistic and educational spheres.`,
    },
  };

  const openCatalogue = () => setIsCatalogueOpen(true);
  const closeCatalogue = () => setIsCatalogueOpen(false);

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
              <h3>About the Artist</h3>
              <p>{exhibition.sui_generis.about_artist}</p>
              <button
                className="button-special"
                onClick={() => navigate("/NevineMattar")}
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
          <button className="artist-button3" onClick={openCatalogue}>
            View Catalog
          </button>

          <PdfViewer2
            isOpen={isCatalogueOpen}
            onRequestClose={closeCatalogue}
            pdfUrl={ArtomaticCatalogue} // This now uses the path correctly
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

export default NevineExheb;
