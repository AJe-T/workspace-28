import React from "react";
import { Link } from "react-router-dom";

const UpdateContact: React.FC = () => {
  return (
    <>
      <div className="section mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h2 text-primary">Update Contacts</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                quo repellendus, repellat explicabo ab ad voluptas animi
                consequatur atque quia pariatur dolores, alias cupiditate fugit.
                Veniam inventore repellat, assumenda doloremque in eos itaque?
                Delectus possimus voluptatem omnis iusto alias optio inventore
                quibusdam numquam quasi consequatur!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
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
                    placeholder="Photo url"
                    type="text"
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Mobile"
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
                    placeholder="Company"
                    type="text"
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Title"
                    type="text"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">Select a Group</option>
                    <option value="">Family</option>
                    <option value="">colleague</option>
                    <option value="">Friend</option>
                    <option value="">Social</option>
                    <option value="">Service</option>
                  </select>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary">Update</button>
                  <Link to="/contact-manager" className="btn btn-dark ms-2">
                    <i className="bi bi-arrow-left-circle pe-1"></i>Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-lg-4 offset-1">
              <img
                src="3rd-img.png "
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

export default UpdateContact;
