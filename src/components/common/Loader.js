import React, { useState, useEffect } from "react";
import CircularLoader from "./CircularLoader";

function Loader() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.addEventListener("showLoader", showLoader);
    window.addEventListener("hideLoader", hideLoader);
    return () => {
      window.removeEventListener("showLoader", showLoader);
      window.removeEventListener("hideLoader", hideLoader);
    };
  }, []);

  const showLoader = () => {
    setLoader(true);
  };

  const hideLoader = () => {
    setLoader(false);
  };

  return (
    <div className="loader-wrapper transform-to-center">
      {loader && (
        <div className="transform-to-center loader-wrapper">
          <CircularLoader />
        </div>
      )}
    </div>
  );
}

export default Loader;
