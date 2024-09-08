import React from "react";

export default function DashboardBody() {
  return (
    <div className="main-container">
      <div className="mb_30 d-flex align-items-center">
        <div className="d-flex mr-21 align-items-center">
          {<i className="bi bi-arrow-left-short fs-36 cp" />}
          <h2>Auftrag Details</h2>
        </div>

        <div className="text-end search-container">
          <i className="bi bi-search search-icon" />
          <input placeholder="Search" className="search-input" value={""} />
        </div>

        <div className="text-end mx-4 js_end cp vertical-center border-cta"></div>
      </div>

      <span
        style={{
          paddingLeft: "26px",
          whiteSpace: "nowrap",
          color: "#525f7f",
          fontSize: "12px",
        }}
      ></span>
    </div>
  );
}
