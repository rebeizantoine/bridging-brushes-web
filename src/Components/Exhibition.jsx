import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/exhibition.css";

const Exhibition = () => {
  const [exhibitions, setExhibitions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/exhibitions/"
        );
        setExhibitions(response.data);
      } catch (error) {
        console.error("Error fetching exhibitions:", error);
      }
    };

    fetchExhibitions();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExhibitions = useMemo(() => {
    return exhibitions.filter((exhibition) =>
      exhibition.exhibition_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [exhibitions, searchTerm]);

  const handleExhibitionClick = (exhibitionName) => {
    navigate(`/exhibitions/${exhibitionName}`); // Navigate to the single exhibition route using the exhibition name
  };

  return (
    <div className="exhibitions-page">
      <header className="header">
        <h1 className="title">Exhibitions</h1>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search exhibitions..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="exhibitions-section">
        {filteredExhibitions.map((exhibition) => (
          <button
            key={exhibition._id}
            className="exhibition-button"
            style={{
              backgroundImage: `url(${exhibition.exhibition_featured1image})`,
            }}
            onClick={() => handleExhibitionClick(exhibition.exhibition_name)}
          >
            {exhibition.exhibition_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Exhibition;
