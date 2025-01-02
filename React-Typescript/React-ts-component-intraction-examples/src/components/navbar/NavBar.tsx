import React from "react";
interface IProps {
  heading: string;
  bgColor: string;
  color: string;
}

const NavBar: React.FC<IProps> = ({ heading, bgColor, color }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${bgColor} ${color}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  {heading}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
