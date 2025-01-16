import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="section mt-3 notfound">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h2 text-danger">404 Not Found</p>
              <p className="fs-4 px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                quo repellendus, repellat explicabo ab ad voluptas animi
                consequatur atque quia pariatur dolores, repellat,
              </p>
              <Link to="/" className="btn btn-danger">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
