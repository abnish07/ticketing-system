import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newError = { email: "", password: "" };

    if (!email) {
      newError.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      newError.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newError.password = "Password must be 8 characters long";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted with: ", { email, password });
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light position-relative">
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
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <img
            src="https://www.coworkingstudio.in/wp-content/uploads/2022/09/cropped-Coworking-Studio-logo-001.png"
            alt="logo"
          />
        </div>

        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${error.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
