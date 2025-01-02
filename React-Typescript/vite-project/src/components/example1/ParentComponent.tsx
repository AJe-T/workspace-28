import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [parentData, setParentData] = React.useState<string>("");
  const  [childData, setChildData] = React.useState<string>("");

  const childDataFunction = (msg: string) => {
    setChildData(msg);
  };

  const handleParentData = (e: React.FormEvent<HTMLInputElement>) => {
    setParentData((e.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="card w-50">
        <div className="card-header bg-primary p-3">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Parent Text"
              onChange={handleParentData}
            />
          </form>
        </div>
        <div className="card-body bg-primary-subtle">
          <h1 className="text-center">Child Data : {childData} </h1>
          <ChildComponent
            pdata={parentData}
            childDataFunction={childDataFunction}
          />
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
