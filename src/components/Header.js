import React from "react";
import logo from "../assets/red30-tech-logo.png";

function Header() {
  return (
    <div>
      <img
        className="logo"
        src={logo}
        alt="Red30 Tech logo"
        title="Red30 Tech | Home"
      />
    </div>
  );
}

export default Header;
