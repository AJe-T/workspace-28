import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark nav-bar">
        <div className="container flex justify-between items-center">
          <div>
            <i className="bi bi-person-lines-fill pr-1 text-white me-2"></i>
            <Link to={"/"} className="navbar-brand text-white">
              Contact <span className="text-warning"> Manager</span>
            </Link>
          </div>

          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link " to="/login">
                    <i className="bi bi-person-circle pe-2"></i>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">
                    <i className="bi bi-person-plus-fill pe-2"></i>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
