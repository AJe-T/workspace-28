import React from "react";
import SecoundComponent from "./SecoundComponent";

const FirstComponent: React.FC = () => {
  return (
    <>
      <div className="card w-50">
        <div className="card-body bg-primary">
          <h3 className="text-white">First Component</h3>
          <SecoundComponent />
        </div>
      </div>
    </>
  );
};

export default FirstComponent;
