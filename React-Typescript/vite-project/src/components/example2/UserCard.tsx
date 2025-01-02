import React from "react";
import { IUser } from "../../models/IUser";

interface IProps {
  tableData?: IUser;
}

const UserCard: React.FC<IProps> = ({ tableData }) => {
  return (
    <>
      {tableData ? (
        <>
          <div className="card sticky-top mt-5">
            <div className="card-header bg-success-subtle p-3">
              <img
                src={tableData?.picture.large}
                className="image-fulid mx-auto d-block"
                alt={tableData?.name.title}
              />
            </div>
            <div className="card-body bg-primary-subtle">
              <p>
                <span className="h6">Name: </span>
                {tableData?.name.first}
                {tableData?.name.last}
              </p>
              <p>
                <span className="h6">Email:</span>
                {tableData?.email}
              </p>
              <p>
                <span className="h6">Age:</span>
                {tableData?.dob.age}
              </p>
              <p>
                <span className="h6">Gender:</span>
                {tableData?.gender}
              </p>
              <p>
                <span className="h6">Country:</span>
                {tableData?.location.country}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card sticky-top mt-5">
            
            <div className="card-body bg-success-subtle">
              <h4 className="text-center">Click On Any User</h4>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserCard;
