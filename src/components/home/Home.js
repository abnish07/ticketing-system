import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/stylesheets/auth.scss";
// import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Home = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isSignupHovered, setIsSignupHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h1 className="card-title text-center mb-4">Welcome to coworking</h1>
        <p className="text-center text-muted mb-4">
          Your perfect coworking solution
        </p>

        <div className="d-grid gap-3">
          <button
            className={`btn btn-primary btn-lg ${
              isLoginHovered ? "shadow-lg scale-up" : ""
            }`}
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
            aria-label="Login to your account"
            onClick={handleLogin}
          >
            {/* <FaSignInAlt className="me-2" /> */}
            Login
          </button>

          <button
            className={`btn btn-success btn-lg ${
              isSignupHovered ? "shadow-lg scale-up" : ""
            }`}
            onMouseEnter={() => setIsSignupHovered(true)}
            onMouseLeave={() => setIsSignupHovered(false)}
            aria-label="Sign up for a new account"
            onClick={handleSignup}
          >
            {/* <FaUserPlus className="me-2" /> */}
            Sign Up
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-muted">Discover your perfect workspace today!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
