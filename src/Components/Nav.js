import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <div className="logo-top">
              F.C. <i className="fas fa-mug-hot"></i>
            </div>
            <div className="logo-bottom">Coffee</div>
          </Link>
          <div className="menu-icon">
            <i className="fas fa-bars"></i>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
