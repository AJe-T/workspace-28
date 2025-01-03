import React from "react";
interface ThirdBoxProps {
    data: string;
}

const ThirdBox: React.FC<ThirdBoxProps> = ({data}) => {
  return (
    <>
      <div className="card">
        <div className="card-body bg-success">
          <h3>Third Box</h3>
          <h4>data : {data} </h4>
        </div>
      </div>
    </>
  );
};

export default ThirdBox;
