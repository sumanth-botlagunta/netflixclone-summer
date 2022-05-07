import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={`navbar ${colorChange && "nav_dark"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="netflix__logo"
        className="netflix_logo"
      />

      <img
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="userlogo"
        className="user_logo"
      />
    </div>
  );
}

export default Navbar;
