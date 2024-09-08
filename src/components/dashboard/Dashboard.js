import React, { useState } from "react";
import { TOAST_SUCCESS } from "../../constants/siteConstants";
import { showToaster } from "../../helper/utils";
import SidebarNavigation from "../Navigation/Navigation";
import Navigation from "../Navigation/Navigation";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.title) {
      newErrors.title = "Title is required";
      isValid = false;
    }

    if (!formData.description) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      showToaster({
        message: "Data has been sent successfully",
        type: TOAST_SUCCESS,
      });
      setFormData({
        title: "",
        description: "",
        images: null,
      });
      setShowForm(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Dashboard</h1>

      {/* Button to open form */}
      <div className="text-center">
        <button
          className="btn btn-primary my-4"
          onClick={() => setShowForm(!showForm)}
        >
          Raise Ticket or Complain
        </button>
      </div>

      {/* Conditional Form Rendering */}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
          {/* Title */}
          <div className="form-group mb-3">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter title of your complaint"
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title}</div>
            )}
          </div>

          {/* Description */}
          <div className="form-group mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Explain your issue"
              rows="4"
            ></textarea>
            {errors.description && (
              <div className="invalid-feedback">{errors.description}</div>
            )}
          </div>

          {/* Image Upload */}
          <div className="form-group mb-3">
            <label>Upload Images (optional)</label>
            <input
              type="file"
              className="form-control-file"
              onChange={handleImageUpload}
              accept="image/*"
              multiple
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success">
            Submit Complaint
          </button>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
