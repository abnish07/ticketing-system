import React from "react";
import { Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <React.Suspense fallback="Loading...">
      <Outlet />
    </React.Suspense>
  );
}
