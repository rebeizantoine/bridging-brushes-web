import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/single-exhebition.css";
import bannerImage from "../Images/MagaliKatra/image-3-dividedwefall.png";
import image1 from "../Images/MagaliKatra/IMG1.JPG";
import image2 from "../Images/MagaliKatra/IMG2.JPG";
import image3 from "../Images/MagaliKatra/IMG3.JPG";
import image4 from "../Images/MagaliKatra/IMG4.JPG";
import image5 from "../Images/MagaliKatra/IMG5.JPG";
import image6 from "../Images/MagaliKatra/IMG6.JPG";
import image7 from "../Images/MagaliKatra/IMG7.JPG";
import image8 from "../Images/MagaliKatra/IMG8.JPG";
import image9 from "../Images/MagaliKatra/IMG9.JPG";
import image10 from "../Images/MagaliKatra/IMG10.JPG";
import image11 from "../Images/MagaliKatra/IMG11.JPG";
import image12 from "../Images/MagaliKatra/IMG12.JPG";
import PdfViewer2 from "./PdfViewer2";
const MagaliCatalogue = "/MK-Exhibition-Catalog.pdf";
const MagaliBooklet = "/MK-Booklet-Artist.pdf";

const MagaliExheb = () => {
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
    exhibition_name: "SUI Generis Society",
    exhibition_description: "“SUI Generis Society”  Solo Show by Magali Katra ",
    exhibition_artist: "Solo Show by Magali Katra",
    exhibition_opening_hours: "9:00 AM",
    exhibition_closing_hours: "6:00 PM",
    exhibition_inauguration: "April 5th 2024",
    exhibition_location: "The Ven, Embassy Row Washington DC.",
    exhibition_length: "April 29th 2024",
    exhibition_country: "United States",
    exhibition_city: "New York",
    sui_generis: {
      title: "SUI Generis Society – Solo Show by Magali Katra",
      dates: "April 5th 2024 to April 28th 2024",
      location: "Washington DC",
      about_artist: `It is about a world where our paths cross for a moment, a day, or sometimes, for a lifetime.It’s about the people we meet and greet, love or dislike, connect with or despise, cherish or forget, privilege or exclude.It is an ongoing journey where we all long for the unwritten pages of future connections, relations and encounters.It is a sequence of chapters we somehow begin or end; communities we integrate or escape; and societies we belong to or cast aside.However, people cross paths in each other’s lives, they linger. But with a change of role, status, substance, or significance.Some only become a memory - dated and classified, and others cross it for new beginnings and ongoing inspiration.
`,
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
                onClick={() => navigate("/MagaliKatra")}
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
            <button className="artist-button4" onClick={openPitch}>
              View Artist's Pitch
            </button>
          </div>
        </div>
      </div>

      {/* Catalogue PDF Viewer */}
      <PdfViewer2
        isOpen={isCatalogueOpen}
        onRequestClose={closeCatalogue}
        pdfUrl={MagaliCatalogue}
        // title="Exhibition Catalogue"
      />

      {/* Pitch PDF Viewer */}
      <PdfViewer2
        isOpen={isPitchOpen}
        onRequestClose={closePitch}
        pdfUrl={MagaliBooklet}
        // title="Artist's Pitch"
      />

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default MagaliExheb;
