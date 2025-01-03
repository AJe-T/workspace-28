import React from "react";
import ThirdBox from "./ThirdBox";
interface SecoundBoxProps {
    data: string;
}

const SecoundBox: React.FC<SecoundBoxProps> = ({data}) => {
  return (
    <>
      <div className="card">
        <div className="card-body bg-warning-subtle">
          <h3>Secound Box</h3>
            {/* <h4>data : {data}</h4> */}
          <ThirdBox data={data} />
        </div>
      </div>
    </>
  );
};

export default SecoundBox;
