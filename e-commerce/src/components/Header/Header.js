import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <img src={logo} alt="" />
      </nav>
    </div>
  );
};

export default Header;
