import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { menuItems, sidebarMenuItems } from "../../helper/sidebarConstants";
import Loader from "../common/Loader";

function SidebarNavigation() {
  const [selectedMenu, setSelectedMenu] = useState("");
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleGoToHomePage = () => {
    window.location.href = "/";
  };

  const handleLogout = () => {
    handleGoToHomePage();
  };

  return (
    <>
      <nav
        className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
        id="navbarVertical"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-n2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapse"
            aria-controls="sidebarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 vertical-center cursor-pointer">
            <img
              src="https://www.coworkingstudio.in/wp-content/uploads/2022/09/cropped-Coworking-Studio-logo-001.png"
              alt="logo"
              className="logo"
              onClick={handleGoToHomePage}
            />
          </div>
          <div className="collapse navbar-collapse" id="sidebarCollapse">
            <ul className="navbar-nav">
              {sidebarMenuItems?.map((menu, index) => (
                <li className="nav-item" key={menuItems[menu]?.name + index}>
                  <Link
                    className={`nav-link ${
                      "/" + menuItems[menu]?.url === window.location.pathname
                        ? "active"
                        : ""
                    }`}
                    to={menuItems[menu]?.url}
                    onClick={() => handleMenuClick(menu)}
                  >
                    {menuItems[menu]?.icon}
                    {menuItems[menu]?.name}
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="navbar-divider my-5 opacity-20" />
            <div className="mt-auto" />
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    selectedMenu === "accounts" ||
                    window.location.pathname === "/accounts"
                      ? "active"
                      : ""
                  }`}
                  to="accounts"
                  onClick={() => handleMenuClick("accounts")}
                >
                  <i className="bi bi-person-square" /> Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-left" /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <React.Suspense fallback={<Loader />}>
          <Outlet />
        </React.Suspense>
      </div>
    </>
  );
}

export default SidebarNavigation;
