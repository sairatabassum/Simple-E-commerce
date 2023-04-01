import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <img src={logo} alt="" />
        <div className="header-link">
          <a href="/order">Order</a>
          <a href="/order review">Order Review</a>
          <a href="/manage inventory">Manage Inventory</a>
          <a href="login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
