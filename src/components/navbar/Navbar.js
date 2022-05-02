import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://i.ibb.co/P1tMz4j/netflix-PNG25.png" alt="logo" />
        </div>
        <div className="navbar-links">
          <div className="navbar-link">
            <a href="/">Home</a>
          </div>
          <div className="navbar-link">
            <a href="/">Browse Categories</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
