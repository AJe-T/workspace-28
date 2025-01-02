import React from "react";

interface IProps {
  pdata: string;
  childDataFunction: (msg: string) => void;
}

const ChildComponent: React.FC<IProps> = ({pdata,childDataFunction}) => {
  return (
    <>
      <div className="card m-3">
        <div className="card-header bg-success p-3">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Child Text"
              onChange={(e)=>{ childDataFunction(e.target.value)}}
            />
          </form>
        </div>
        <div className="card-body bg-success-subtle">
          <h1 className="text-center">Parent Data : {pdata}</h1>
        </div>
      </div>
    </>
  );
};

export default ChildComponent;
