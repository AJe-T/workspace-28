import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <h1>This is a Contat Manager</h1>
        <Link to="/contact-manager" className="btn btn-dark">
          Click Here{" "}
        </Link>
      </div>
    </>
  );
};

export default Home;
