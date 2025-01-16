import React from "react";
import { Link } from "react-router-dom";

const ViewContact: React.FC = () => {
  return (
    <>
      <div className="section mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-success">View Contacts</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                quo repellendus, repellat explicabo ab ad voluptas animi
                consequatur atque quia pariatur dolores, alias cupiditate fugit.
                Veniam inventore repellat, assumenda doloremque in eos itaque?
                Delectus
              </p>
            </div>
          </div>
          <div className="row mt-3 align-items-center">
            <div className="col-sm-3">
              <img
                src="2nd-img.png"
                className="image-fluid rounded-circle shadow"
                alt="2nd img"
              />
            </div>
            <div className="col-sm-8 ml-4">
              <ul className="list-group">
                <li className="list-group-item">
                  Name : <span className="fw-bold">alex</span>
                </li>
                <li className="list-group-item">
                  Email : <span className="fw-bold">alex@gmail.com</span>
                </li>
                <li className="list-group-item">
                  Phone-No : <span className="fw-bold">1234</span>
                </li>
                <li className="list-group-item">
                  Photo Url :{" "}
                  <span className="fw-bold">google.com/1st-photo</span>
                </li>
                <li className="list-group-item">
                  Job title : <span className="fw-bold">Java Developer</span>
                </li>
                <li className="list-group-item">
                  Company : <span className="fw-bold">TCS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <Link to="/contact-manager" className="btn btn-dark">
                <i className="bi bi-arrow-left-circle-fill pe-1"></i>Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewContact;
