import React, { lazy } from "react";
import DashboardBody from "../components/dashboard/DashbardBody";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";

const ROUTES = (props) => {
  return [
    {
      path: "/login",
      key: "LOGIN",
      exact: true,
      component: <Login />,
    },
    {
      path: "/signup",
      key: "SIGNUP",
      exact: true,
      component: <Signup />,
    },
    {
      path: "/dashboard",
      key: "DASHBOARD",
      exact: true,
      component: <DashboardBody />,
    },
    {
      path: "*",
      key: "ROUTE_NOT_MATCHED",
      exact: true,
      component: <Home />,
    },
  ];
};

export default ROUTES;
