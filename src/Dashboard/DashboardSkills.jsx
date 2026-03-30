import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactdash.css";
import axios from "axios";

const initialContacts = [
  { platform: "Facebook", url: "" },
  { platform: "Instagram", url: "" },
  { platform: "Pinterest", url: "" },
  { platform: "YouTube", url: "" },
];

function DashboardCV() {
  const [contacts, setContacts] = useState(initialContacts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/contact123/"
        );
        const {
          contact_facebook_link,
          contact_instagram_link,
          contact_pinterest_link,
          contact_youtube_link,
        } = response.data;
        setContacts([
          { platform: "Facebook", url: contact_facebook_link },
          { platform: "Instagram", url: contact_instagram_link },
          { platform: "Pinterest", url: contact_pinterest_link },
          { platform: "YouTube", url: contact_youtube_link },
        ]);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);

  const handleDeleteContact = async (contactPlatform) => {
    try {
      await axios.delete(
        `https://bridges-backend-ob24.onrender.com/contact123/${contactPlatform}`
      );
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.platform === contactPlatform
            ? { ...contact, url: "" }
            : contact
        )
      );
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Error deleting contact");
    }
  };

  const handleEditContactClick = (contact) => {
    setCurrentContact(contact);
    setIsEditing(true);
  };

  const handleEditContactChange = (e) => {
    const { name, value } = e.target;
    setCurrentContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleEditContactSave = async () => {
    try {
      const updatedContacts = contacts.map((contact) =>
        contact.platform === currentContact.platform
          ? { ...contact, url: currentContact.url }
          : contact
      );
      const updatedContact = {
        contact_facebook_link: updatedContacts.find(
          (c) => c.platform === "Facebook"
        ).url,
        contact_instagram_link: updatedContacts.find(
          (c) => c.platform === "Instagram"
        ).url,
        contact_pinterest_link: updatedContacts.find(
          (c) => c.platform === "Pinterest"
        ).url,
        contact_youtube_link: updatedContacts.find(
          (c) => c.platform === "YouTube"
        ).url,
      };
      const response = await axios.put(
        "https://bridges-backend-ob24.onrender.com/contact123/",
        updatedContact
      );
      setContacts(updatedContacts);
      console.log("Contact updated successfully:", response.data);
      toast.success("Contact updated successfully");
      setIsEditing(false);
      setCurrentContact(null);
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Error updating contact");
    }
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentContact(null);
  };

  return (
    <div className="dashboard-cv">
      <ToastContainer />
      <fieldset className="cv-fieldset">
        <div className="contact-us" id="contact-us">
          <h1>Contact Us</h1>
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.platform}>
                    <td>{contact.platform}</td>
                    <td>{contact.url}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEditContactClick(contact)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteContact(contact.platform)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {isEditing && currentContact && (
          <div className="edit-form">
            <h2>Edit Contact</h2>
            <label>
              Platform:
              <input
                type="text"
                name="platform"
                value={currentContact.platform}
                readOnly
              />
            </label>
            <label>
              URL:
              <input
                type="text"
                name="url"
                value={currentContact.url}
                onChange={handleEditContactChange}
              />
            </label>
            <button className="save-btn" onClick={handleEditContactSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleEditCancel}>
              Cancel
            </button>
          </div>
        )}
      </fieldset>
    </div>
  );
}

export default DashboardCV;
