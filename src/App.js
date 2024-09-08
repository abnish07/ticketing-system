import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./assets/stylesheets/shared.scss";
import ROUTES from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarNavigation from "./components/Navigation/Navigation";
import { DELAY, TOAST_ERROR, TOAST_SUCCESS } from "./constants/siteConstants";
import Loader from "./components/common/Loader";
import Toaster from "./components/common/Toaster";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

function App(props) {
  const [toastOpen, setToastOpen] = useState({
    isOpen: false,
    toastMessage: "",
    type: TOAST_SUCCESS,
  });

  useEffect(() => {
    window.addEventListener("showToaster", showToaster);
    window.addEventListener("hideToaster", hideToaster);
    return () => {
      window.removeEventListener("showToaster", showToaster);
      window.removeEventListener("hideToaster", hideToaster);
    };
  }, []);

  const showToaster = (event) => {
    if (event?.detail?.type === TOAST_SUCCESS) {
      setToastOpen({
        isOpen: true,
        toastMessage: event.detail?.message,
        type: TOAST_SUCCESS,
      });
    } else {
      setToastOpen({
        isOpen: true,
        toastMessage: event.detail?.message,
        type: TOAST_ERROR,
      });
    }
    setTimeout(() => {
      hideToaster();
    }, DELAY);
  };

  const hideToaster = () => {
    setToastOpen({ isOpen: false, toastMessage: "", type: TOAST_SUCCESS });
  };

  const hideSidebarPaths = ["/login", "/signup", "/"];
  const isSidebarHidden = hideSidebarPaths.includes(window.location.pathname);

  return (
    <div className="application-wrapper d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Router>
        <Loader />
        {!isSidebarHidden && <SidebarNavigation />}
        {toastOpen.isOpen && (
          <div>
            <Toaster toastOpen={toastOpen} onClose={hideToaster} />
          </div>
        )}
        <Routes>
          {ROUTES(props)?.map((route) => (
            <Route
              path={route.path}
              key={route.key}
              exact={route.exact}
              element={route.component}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     loginData: state.loginData,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     // actions: {
//     //   authActions: bindActionCreators(authActions, dispatch),
//     // },
//   };
// }
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
