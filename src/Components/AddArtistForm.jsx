import React, { useState, useRef } from "react";
import axios from "axios";

const AddArtistForm = ({ onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    artist_name: "",
    artist_lastname: "",
    artist_aka: "",
    artist_arttype: "",
    artist_image: null,
    artist_country: "",
    artist_city: "",
    artist_about: "",
    artist_work1name: "",
    artist_work1: null,
    artist_work1des: "", // Add this line
    artist_work2name: "",
    artist_work2: null,
    artist_work2des: "", // Add this line
    artist_work3name: "",
    artist_work3: null,
    artist_work3des: "", // Add this line
    artist_pdf: null,
  });
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue =
      name.startsWith("artist_work") ||
      name === "artist_image" ||
      name === "artist_pdf"
        ? (files && files[0]) || null
        : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataObject = new FormData(formRef.current);
      const response = await axios.post(
        "https://bridges-backend-ob24.onrender.com/artists/artists/add",
        formDataObject
      );
      onSuccess(response.data);
      setFormData({
        artist_name: "",
        artist_lastname: "",
        artist_aka: "",
        artist_arttype: "",
        artist_image: null,
        artist_country: "",
        artist_city: "",
        artist_about: "",
        artist_work1name: "",
        artist_work1: null,
        artist_work1des: "", // Reset this field
        artist_work2name: "",
        artist_work2: null,
        artist_work2des: "", // Reset this field
        artist_work3name: "",
        artist_work3: null,
        artist_pdf: null,
      });
      setError("");
    } catch (error) {
      setError("Failed to create artist");
      console.error("Error:", error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Other form fields */}
      <div className="form-group">
        <label>Artist Name</label>
        <input
          type="text"
          name="artist_name"
          value={formData.artist_name}
          onChange={handleChange}
          placeholder="Artist Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Last Name</label>
        <input
          type="text"
          name="artist_lastname"
          value={formData.artist_lastname}
          onChange={handleChange}
          placeholder="Artist Last Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist AKA</label>
        <input
          type="text"
          name="artist_aka"
          value={formData.artist_aka}
          onChange={handleChange}
          placeholder="Artist AKA"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Art Type</label>
        <input
          type="text"
          name="artist_arttype"
          value={formData.artist_arttype}
          onChange={handleChange}
          placeholder="Artist Art Type"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Image</label>
        <input
          type="file"
          name="artist_image"
          onChange={handleChange}
          accept="image/*"
          required
        />
        {formData.artist_image && (
          <img
            src={URL.createObjectURL(formData.artist_image)}
            alt="Artist"
            style={{ maxWidth: "200px", marginTop: "10px" }}
          />
        )}
      </div>
      <div className="form-group">
        <label>Artist Country</label>
        <input
          type="text"
          name="artist_country"
          value={formData.artist_country}
          onChange={handleChange}
          placeholder="Artist Country"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist City</label>
        <input
          type="text"
          name="artist_city"
          value={formData.artist_city}
          onChange={handleChange}
          placeholder="Artist City"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist About</label>
        <textarea
          name="artist_about"
          value={formData.artist_about}
          onChange={handleChange}
          placeholder="Artist About"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Work 1 Name</label>
        <input
          type="text"
          name="artist_work1name"
          value={formData.artist_work1name}
          onChange={handleChange}
          placeholder="Artist Work 1 Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Work 1 Description</label>
        <input
          type="text"
          name="artist_work1des"
          value={formData.artist_work1des}
          onChange={handleChange}
          placeholder="Artist Work 1 Description"
        />
      </div>
      <div className="form-group">
        <label>Artist Work 1</label>
        <input
          type="file"
          name="artist_work1"
          onChange={handleChange}
          accept="image/*"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Work 2 Name</label>
        <input
          type="text"
          name="artist_work2name"
          value={formData.artist_work2name}
          onChange={handleChange}
          placeholder="Artist Work 2 Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Work 2 Description</label>
        <input
          type="text"
          name="artist_work2des"
          value={formData.artist_work2des}
          onChange={handleChange}
          placeholder="Artist Work 2 Description"
        />
      </div>
      <div className="form-group">
        <label>Artist Work 2</label>
        <input
          type="file"
          name="artist_work2"
          onChange={handleChange}
          accept="image/*"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Work 3 Name</label>
        <input
          type="text"
          name="artist_work3name"
          value={formData.artist_work3name}
          onChange={handleChange}
          placeholder="Artist Work 3 Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist Work 3</label>
        <input
          type="file"
          name="artist_work3"
          onChange={handleChange}
          accept="image/*"
          required
        />
        <div className="form-group">
          <label>Artist Work 3 Description</label>
          <input
            type="text"
            name="artist_work3des"
            value={formData.artist_work3des}
            onChange={handleChange}
            placeholder="Artist Work 3 Description"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Artist PDF</label>
        <input
          type="file"
          name="artist_pdf"
          onChange={handleChange}
          accept="application/pdf"
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default AddArtistForm;
