import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboardcv.css";
import AddArtistForm from "../Components/AddArtistForm"; // Import your AddArtistForm component

const DashboardArtists = () => {
  const [artists, setArtists] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArtist, setCurrentArtist] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newArtist, setNewArtist] = useState({
    artist_name: "",
    artist_lastname: "",
    artist_aka: "",
    artist_arttype: "",
    artist_image: null,
    artist_country: "",
    artist_city: "",
    artist_about: "",
    artist_work1: null,
    artist_work1des: "",
    artist_work2: null,
    artist_work2des: "",
    artist_work3: null,
    artist_work3des: "",
    artist_pdf: null,
  });
  const [aboutWordCount, setAboutWordCount] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetchArtists();
  }, []);

  // Function to fetch artist data
  const fetchArtists = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/artists"
      );
      setArtists(response.data);
    } catch (error) {
      console.error("There was an error fetching the artists!", error);
      toast.error("Failed to fetch artists.");
    }
  };

  const handleDelete = (artistId, artistFirstName, artistLastName) => {
    // Construct URL for deleting the artist's PDF file
    const pdfDeleteUrl = `https://bridges-backend-ob24.onrender.com/artists/artists/${artistFirstName}/${artistLastName}/pdf`;

    // Attempt to delete the artist's PDF file
    axios
      .delete(pdfDeleteUrl)
      .catch((error) => {
        // Check if the error status is 404 (PDF not found)
        if (error.response && error.response.status === 404) {
          console.log("PDF not found, proceeding to delete artist.");
          // Proceed to delete the artist
          return Promise.resolve(); // Resolve to continue to the artist deletion step
        } else {
          // If it's another type of error, reject to handle it in the catch below
          return Promise.reject(error);
        }
      })
      .then(() => {
        // Proceed to delete the artist
        return axios.delete(
          `https://bridges-backend-ob24.onrender.com/artists/${artistId}`
        );
      })
      .then(() => {
        // Update state to remove the artist from the list
        setArtists((prevArtists) =>
          prevArtists.filter((artist) => artist._id !== artistId)
        );
        toast.success("Artist and PDF deleted successfully");
      })
      .catch((error) => {
        console.error("There was an error deleting the artist or PDF!", error);
        toast.error("Error deleting artist or PDF");
      });
  };

  const handleEditClick = (artist) => {
    setCurrentArtist(artist);
    setAboutWordCount(countWords(artist.artist_about));
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (name === "artist_about") {
      const wordCount = countWords(value);
      if (wordCount <= 50) {
        setCurrentArtist((prevArtist) => ({
          ...prevArtist,
          [name]: value,
        }));
        setAboutWordCount(wordCount);
      }
    } else {
      setCurrentArtist((prevArtist) => ({
        ...prevArtist,
        [name]: value,
      }));
    }
  };

  const handleEditSave = () => {
    const formData = new FormData();

    Object.keys(currentArtist).forEach((key) => {
      if (
        key === "artist_image" ||
        key === "artist_work1" ||
        key === "artist_work2" ||
        key === "artist_work3"
      ) {
        if (currentArtist[key] instanceof File) {
          formData.append(key, currentArtist[key]);
        }
      } else {
        formData.append(key, currentArtist[key]);
      }
    });

    axios
      .put(
        `https://bridges-backend-ob24.onrender.com/artists/${currentArtist._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        // Fetch updated artist list to ensure image URL updates
        return axios.get("https://bridges-backend-ob24.onrender.com/artists");
      })
      .then((response) => {
        setArtists(response.data);
        setIsEditing(false);
        setCurrentArtist({});
        toast.success("Artist updated successfully");
      })
      .catch((error) => {
        console.error("There was an error updating the artist!", error);
      });
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentArtist(null);
  };

  const handleImageUpload = (e, imageName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentArtist((prevArtist) => ({
          ...prevArtist,
          [imageName]: file,
          [`${imageName}Preview`]: reader.result, // Store the preview URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleAddCancel = () => {
    setIsAdding(false);
    setNewArtist({});
  };

  const handleNewImageUpload = (e, imageName) => {
    const file = e.target.files[0];
    setNewArtist((prevArtist) => ({
      ...prevArtist,
      [imageName]: file,
    }));
  };

  const countWords = (text) => {
    return text
      ? text.split(/\s+/).filter((word) => word.length > 0).length
      : 0;
  };
  const handleRemovePdf = (artistName, artistLastName) => {
    axios
      .delete(
        `https://bridges-backend-ob24.onrender.com/artists/artists/${artistName}/${artistLastName}/pdf`
      )
      .then(() => {
        toast.success("PDF removed successfully");
        // Refresh the artist list to reflect the changes
        axios
          .get("https://bridges-backend-ob24.onrender.com/artists")
          .then((response) => {
            setArtists(response.data);
          })
          .catch((error) => {
            console.error("There was an error fetching the artists!", error);
          });
      })
      .catch((error) => {
        console.error("There was an error removing the PDF!", error);
      });
  };
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleRefresh = () => {
    fetchArtists();
  };

  return (
    <div className="dashboard-cv">
      <fieldset className="cv-fieldset">
        <div className="cv" id="cv">
          <h1>Artists</h1>
          <button className="add-btn" onClick={() => setIsAdding(true)}>
            Add Artist
          </button>
          <button className="refresh-btn" onClick={handleRefresh}>
            Refresh Artists
          </button>
          <table className="artists-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>AKA</th>
                <th>Art Type</th>
                <th>Image</th>
                <th>Country</th>
                <th>City</th>
                <th>About</th>
                <th>Work 1</th>
                <th>Work 1 Description</th>
                <th>Work 2</th>
                <th>Work 2 Description</th>
                <th>Work 3</th>
                <th>Work 3 Description</th>
                <th>PDF Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist._id}>
                  <td>{artist.artist_name}</td>
                  <td>{artist.artist_lastname}</td>
                  <td>{artist.artist_aka}</td>
                  <td>{artist.artist_arttype}</td>
                  <td>
                    <img
                      src={artist.artist_image || "default-image-url"} // Ensure a default URL is provided if image is missing
                      alt={artist.artist_name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_image)}
                    />
                  </td>
                  <td>{artist.artist_country}</td>
                  <td>{artist.artist_city}</td>
                  <td>
                    <textarea value={artist.artist_about} readOnly></textarea>
                  </td>

                  <td>
                    <img
                      src={artist.artist_work1}
                      alt={artist.artist_work1name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_work1)}
                    />
                  </td>
                  <td>{artist.artist_work1des}</td>
                  <td>
                    <img
                      src={artist.artist_work2}
                      alt={artist.artist_work2name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_work2)}
                    />
                  </td>
                  <td>{artist.artist_work2des}</td>
                  <td>
                    <img
                      src={artist.artist_work3}
                      alt={artist.artist_work3name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_work3)}
                    />
                  </td>
                  <td>{artist.artist_work3des}</td>
                  <td>
                    {artist.artist_pdf ? (
                      <>
                        <a
                          href={`/artists/artist/pdf/name/${artist.artist_name}/${artist.artist_lastname}`}
                        >
                          {artist.artist_pdf.split("/").pop()}
                        </a>
                        <button
                          className="remove-pdf-btn"
                          onClick={() =>
                            handleRemovePdf(
                              artist.artist_name,
                              artist.artist_lastname
                            )
                          }
                        >
                          &times;
                        </button>
                      </>
                    ) : (
                      "No PDF"
                    )}
                  </td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(artist)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(artist._id, artist.artist_pdf)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isAdding && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleAddCancel}>
                  &times;
                </span>
                <h2>Add Artist</h2>
                <AddArtistForm
                  onCancel={handleAddCancel}
                  onSuccess={() => {
                    setIsAdding(false);
                    toast.success("Artist added successfully");
                  }}
                />
              </div>
            </div>
          )}
          {isEditing && currentArtist && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleEditCancel}>
                  &times;
                </span>
                <h2>Edit Artist</h2>
                <div className="modal-body">
                  <label>
                    Name:
                    <input
                      type="text"
                      name="artist_name"
                      value={currentArtist.artist_name || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="artist_lastname"
                      value={currentArtist.artist_lastname || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    AKA:
                    <input
                      type="text"
                      name="artist_aka"
                      value={currentArtist.artist_aka || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Art Type:
                    <input
                      type="text"
                      name="artist_arttype"
                      value={currentArtist.artist_arttype || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Image:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_image")}
                    />
                    <div>
                      {currentArtist.artist_imagePreview ? (
                        <img
                          src={currentArtist.artist_imagePreview}
                          alt="Preview"
                          className="artist-img-preview"
                        />
                      ) : currentArtist.artist_image ? (
                        <img
                          src={currentArtist.artist_image}
                          alt="Current"
                          className="artist-img-preview"
                          onClick={() =>
                            openImageInNewTab(currentArtist.artist_image)
                          }
                        />
                      ) : (
                        "No image available"
                      )}
                    </div>
                  </label>
                  <label>
                    Country:
                    <input
                      type="text"
                      name="artist_country"
                      value={currentArtist.artist_country || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    City:
                    <input
                      type="text"
                      name="artist_city"
                      value={currentArtist.artist_city || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    About: (Max 50 words)
                    <textarea
                      name="artist_about"
                      value={currentArtist.artist_about || ""}
                      onChange={handleEditChange}
                    />
                    <div>Words left: {50 - aboutWordCount}</div>
                  </label>
                  <label>
                    Work 1:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_work1")}
                    />
                    <div>
                      {currentArtist.artist_work1Preview ? (
                        <img
                          src={currentArtist.artist_work1Preview}
                          alt="Preview"
                          className="artist-img-preview"
                        />
                      ) : currentArtist.artist_work1 ? (
                        <img
                          src={currentArtist.artist_work1}
                          alt="Current"
                          className="artist-img-preview"
                          onClick={() =>
                            openImageInNewTab(currentArtist.artist_work1)
                          }
                        />
                      ) : (
                        "No work 1 image available"
                      )}
                    </div>
                  </label>
                  <label>
                    Work 1 Description:
                    <textarea
                      name="artist_work1des"
                      value={currentArtist.artist_work1des || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Work 2:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_work2")}
                    />
                    <div>
                      {currentArtist.artist_work2Preview ? (
                        <img
                          src={currentArtist.artist_work2Preview}
                          alt="Preview"
                          className="artist-img-preview"
                        />
                      ) : currentArtist.artist_work2 ? (
                        <img
                          src={currentArtist.artist_work2}
                          alt="Current"
                          className="artist-img-preview"
                          onClick={() =>
                            openImageInNewTab(currentArtist.artist_work2)
                          }
                        />
                      ) : (
                        "No work 2 image available"
                      )}
                    </div>
                  </label>
                  <label>
                    Work 2 Description:
                    <textarea
                      name="artist_work2des"
                      value={currentArtist.artist_work2des || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Work 3:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_work3")}
                    />
                    <div>
                      {currentArtist.artist_work3Preview ? (
                        <img
                          src={currentArtist.artist_work3Preview}
                          alt="Preview"
                          className="artist-img-preview"
                        />
                      ) : currentArtist.artist_work3 ? (
                        <img
                          src={currentArtist.artist_work3}
                          alt="Current"
                          className="artist-img-preview"
                          onClick={() =>
                            openImageInNewTab(currentArtist.artist_work3)
                          }
                        />
                      ) : (
                        "No work 3 image available"
                      )}
                    </div>
                  </label>
                  <label>
                    Work 3 Description:
                    <textarea
                      name="artist_work3des"
                      value={currentArtist.artist_work3des || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  {/* <label>
          PDF:
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, "artist_pdf")}
          />
          {currentArtist.artist_pdf &&
            typeof currentArtist.artist_pdf === "string" && (
              <div>
                <span>Current PDF: </span>
                <span>{currentArtist.artist_pdf.split("/").pop()}</span>
              </div>
            )}
        </label> */}
                  <button className="save-btn" onClick={handleEditSave}>
                    Save
                  </button>
                  <button className="cancel-btn" onClick={handleEditCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </fieldset>
      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 600px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.3s ease-in-out;
          position: relative;
          max-height: 80%;
          overflow-y: auto;
        }
        .modal-body {
          max-height: 60vh;
          overflow-y: auto;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default DashboardArtists;
