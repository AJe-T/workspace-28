import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/3rd-img.png";

const Login: React.FC = () => {
  return (
    <>
      <div className="section mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h2 text-info">Login</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                quo repellendus, repellat explicabo ab ad voluptas animi
                consequatur atque quia pariatur dolores, alias cupiditate fugit.
                Veniam inventore repellat,
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mt-5">
              <form>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Name/Email"
                    type="text"
                  />
                </div>

                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="text"
                  />
                </div>

                <div className="mt-3">
                  <button className="btn btn-info">Login</button>
                  <Link to="/contact-manager" className="btn btn-dark ms-3">
                    <i className="bi bi-arrow-left-circle pe-2"></i>Cancel
                  </Link>
                </div>
              </form>
              <p className="mt-2">
                If you don't have a Account{" "}
                <Link to="/registration">Register</Link>
              </p>
            </div>
            <div className="col-lg-4 offset-1">
              <img
                src={Img}
                className="img-fluid rounded-circle shadow"
                alt="Inserted image url"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
