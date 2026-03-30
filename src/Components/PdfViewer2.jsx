import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../Styles/pdfviewer2.css"; // Import the external CSS file

const PdfViewer2 = ({ isOpen, onRequestClose, pdfUrl, title }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile); // Update when resizing
    return () => window.removeEventListener("resize", checkMobile); // Cleanup listener
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="pdf-modal"
      overlayClassName="pdf-overlay"
      contentLabel="PDF Viewer"
    >
      <button onClick={onRequestClose} className="close-modal-button">
        Close
      </button>
      <h2>{title}</h2>
      {pdfUrl ? (
        isMobile ? (
          <div className="pdf-viewer-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl={pdfUrl}
                renderMode="svg" // Consider using svg mode for better scaling
                className="pdf-viewer"
                scale={window.innerWidth <= 768 ? 4 : 1}
              />
            </Worker>
          </div>
        ) : ( 
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{
              minHeight: "500px", // Set a minimum height for larger screens
            }}
          />
        )
      ) : (
        <div>Loading PDF...</div>
      )}
    </Modal>
  );
};

export default PdfViewer2;
