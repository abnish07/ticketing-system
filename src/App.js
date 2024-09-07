import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ROUTES from "./router";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route element={<Navigation />} />
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
