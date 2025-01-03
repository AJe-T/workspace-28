import React, { useContext } from "react";
import { fullData } from "../../App";

const FourthComponent: React.FC = () => {
  const data  = useContext(fullData);
  return (
    <>
      <div className="card">
        <div className="card-body bg-info">
          <h3>Fourth Component</h3>
          <h4>data : {data}</h4>
        </div>
      </div>
    </>
  );
};

export default FourthComponent;
