import React from "react";
import FourthComponent from "./FourthComponent";

const ThirdComponent: React.FC = () => {
  return (
    <>
      <div className="card">
        <div className="card-body bg-danger">
          <h3>Third Component</h3>
          <FourthComponent />
        </div>
      </div>
    </>
  );
};

export default ThirdComponent;
