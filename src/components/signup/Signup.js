import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Using useHistory for navigation

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    coworkingLocation: "",
    name: "",
    position: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newError = {};

    if (!formData.email) {
      newError.email = "Email is required";
      isValid = false;
    }

    if (!formData.password) {
      newError.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newError.password = "Password must be 8 characters long";
      isValid = false;
    }

    if (!formData.coworkingLocation) {
      newError.coworkingLocation = "Coworking location is required";
      isValid = false;
    }

    if (!formData.name) {
      newError.name = "Name is required";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted with: ", formData);
      // Handle form submission
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light position-relative">
      {/* Back Button in the top-left corner */}
      <button
        type="button"
        className="btn btn-secondary position-absolute"
        style={{ top: "20px", left: "20px" }}
        onClick={handleBack}
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <img
            src="https://www.coworkingstudio.in/wp-content/uploads/2022/09/cropped-Coworking-Studio-logo-001.png"
            alt="logo"
          />
        </div>

        <h3 className="text-center mb-3">Sign Up</h3>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              className={`form-control ${error.name ? "is-invalid" : ""}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {error.name && <div className="invalid-feedback">{error.name}</div>}
          </div>

          {/* Email Field */}
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${error.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {error.email && (
              <div className="invalid-feedback">{error.email}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group mb-3">
            <label>Password</label>
            <div className="input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                className={`form-control ${error.password ? "is-invalid" : ""}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={`bi ${
                      passwordVisible ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </span>
              </div>
            </div>
            {error.password && (
              <div className="invalid-feedback">{error.password}</div>
            )}
          </div>

          {/* Coworking Location Field */}
          <div className="form-group mb-3">
            <label>Coworking Location</label>
            <input
              type="text"
              className={`form-control ${
                error.coworkingLocation ? "is-invalid" : ""
              }`}
              name="coworkingLocation"
              value={formData.coworkingLocation}
              onChange={handleChange}
              placeholder="Enter your coworking location"
            />
            {error.coworkingLocation && (
              <div className="invalid-feedback">{error.coworkingLocation}</div>
            )}
          </div>

          {/* Position Field (Optional) */}
          <div className="form-group mb-3">
            <label>Position (Optional)</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Enter your position"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-block mb-3">
            Sign Up
          </button>

          {/* Back Button */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
