import React from "react";
import SecoundBox from "./SecoundBox";

interface FirstBoxProps {
    data: string;
}

const FirstBox: React.FC<FirstBoxProps> = ({data}) => {
  return (
    <>
      <div className="card w-50">
        <div className="card-body bg-danger">
          <h3>First Box</h3>
            {/* <h4>data : {data}</h4> */}
          <SecoundBox data={data} />
        </div>
      </div>
    </>
  );
};

export default FirstBox;
