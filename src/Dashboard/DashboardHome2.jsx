import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import { ResizableBox } from "react-resizable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./dashboardhome2.css"; // Import your CSS file here

const DashboardHome2 = () => {
  const [paintings, setPaintings] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current painting
  const [editIndex, setEditIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/featuredp"
        );
        setPaintings(response.data);
      } catch (error) {
        console.error("Error fetching paintings:", error);
      }
    };

    fetchPaintings();
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setPreviewImage(paintings[index].feature_image_of_painting); // Set preview image to the current painting image
  };

  const handleSave = async (index) => {
    try {
      // Use the index to get the correct painting ID
      await axios.put(
        `https://bridges-backend-ob24.onrender.com/featuredp/${paintings[index]._id}`,
        paintings[index]
      );
      setEditIndex(null);
      toast.success("Painting details saved successfully!");
    } catch (error) {
      console.error("Error saving painting:", error);
      toast.error("Error saving painting. Please try again.");
    }
  };

  const handleChange = (e, index, field) => {
    const newPaintings = [...paintings];
    newPaintings[index][field] = e.target.value;
    setPaintings(newPaintings);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPaintings = [...paintings];
        newPaintings[index].feature_image_of_painting = reader.result;
        setPaintings(newPaintings);
        setPreviewImage(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
    }
  };

  const wordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  return (
    <div className="dashboard-home" id="featured-paintings">
      <h2>Featured Paintings</h2>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
      >
        {paintings.map((painting, index) => (
          <div className="edit-featured-painting" key={index}>
            <form>
              <div className="form-group">
                <label htmlFor={`artistName${index}`}>Artist Name:</label>
                <input
                  type="text"
                  id={`artistName${index}`}
                  value={painting.feature_artist_name}
                  onChange={(e) =>
                    handleChange(e, index, "feature_artist_name")
                  }
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`lastName${index}`}>Last Name:</label>
                <input
                  type="text"
                  id={`lastName${index}`}
                  value={painting.feature_artist_last_name}
                  onChange={(e) =>
                    handleChange(e, index, "feature_artist_last_name")
                  }
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`genre${index}`}>Genre:</label>
                <input
                  type="text"
                  id={`genre${index}`}
                  value={painting.feature_genre}
                  onChange={(e) => handleChange(e, index, "feature_genre")}
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`paintingName${index}`}>
                  Name of Painting:
                </label>
                <input
                  type="text"
                  id={`paintingName${index}`}
                  value={painting.feature_name_of_painting}
                  onChange={(e) =>
                    handleChange(e, index, "feature_name_of_painting")
                  }
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`paintingImage${index}`}>
                  Image of Painting:
                </label>
                {editIndex === index ? (
                  <>
                    <input
                      type="file"
                      id={`paintingImage${index}`}
                      onChange={(e) => handleImageChange(e, index)}
                    />
                    {previewImage && (
                      <img
                        src={previewImage}
                        alt="Painting Preview"
                        className="painting-image"
                      />
                    )}
                  </>
                ) : (
                  <img
                    src={painting.feature_image_of_painting}
                    alt="Painting"
                    className="painting-image"
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor={`description${index}`}>Description:</label>
                <textarea
                  id={`description${index}`}
                  value={painting.feature_description_of_painting}
                  onChange={(e) =>
                    handleChange(e, index, "feature_description_of_painting")
                  }
                  readOnly={editIndex !== index}
                />
                {editIndex === index && (
                  <p>
                    {50 - wordCount(painting.feature_description_of_painting)}{" "}
                    words remaining
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor={`tag1${index}`}>Tag 1:</label>
                <input
                  type="text"
                  id={`tag1${index}`}
                  value={painting.feature_tag1}
                  onChange={(e) => handleChange(e, index, "feature_tag1")}
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`tag2${index}`}>Tag 2:</label>
                <input
                  type="text"
                  id={`tag2${index}`}
                  value={painting.feature_tag2}
                  onChange={(e) => handleChange(e, index, "feature_tag2")}
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`tag3${index}`}>Tag 3:</label>
                <input
                  type="text"
                  id={`tag3${index}`}
                  value={painting.feature_tag3}
                  onChange={(e) => handleChange(e, index, "feature_tag3")}
                  readOnly={editIndex !== index}
                />
              </div>
              {editIndex === index ? (
                <button
                  type="button"
                  className="save-btn"
                  onClick={() => handleSave(index)}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              )}
            </form>
          </div>
        ))}
      </Slider>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default DashboardHome2;
