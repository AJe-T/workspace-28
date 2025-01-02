import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [parentData, setParentData] = React.useState<string>("John");
  const [childData, setChildData] = React.useState<string>("");

  const updateChildData = (msg: string): void => {
    setChildData(msg);
  };

  return (
    <>
      <div className="card w-50 mx-auto">
        <div className="card-header bg-danger text-white">Parent Component</div>
        <div className="card-body bg-danger-subtle">
          <h4>
            <span className="fw-bolf">Parent-Data :</span> {parentData}
          </h4>
          <h4>
            <span className="fw-bolf">Child-Msg :</span>{" "}
            <span className="text-primary">{childData}</span>
          </h4>
          <ChildComponent
            parentData={parentData}
            updateChildData={updateChildData}
          />
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
