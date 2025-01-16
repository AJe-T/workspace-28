import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <>
      <div className="section mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h2 text-info">Register</p>
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
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Email"
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
                  <button className="btn btn-info">Register</button>
                  <Link to="/contact-manager" className="btn btn-dark ms-3">
                    <i className="bi bi-arrow-left-circle pe-2"></i>Cancel
                  </Link>
                </div>
              </form>
              <p className="mt-2">
                If you already have a Account <Link to="/login">Login</Link>
              </p>
            </div>
            <div className="col-lg-4 offset-1">
              <img
                src="/3rd-img.png "
                className="img-fluid"
                alt="Inserted image url"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
