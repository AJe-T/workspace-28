import React, { useContext } from "react";
import ThirdComponent from "./ThirdComponent";
import { fullData } from "../../App"; // Adjust the import path as necessary

const SecoundComponent: React.FC = () => {
  const data = useContext(fullData);
  return (
    <>
      <div className="card">
        <div className="card-body bg-warning">
          <h3 className="">Secound Component</h3>
          <h4>data : {data}</h4>
          <ThirdComponent />
        </div>
      </div>
    </>
  );
};

export default SecoundComponent;
