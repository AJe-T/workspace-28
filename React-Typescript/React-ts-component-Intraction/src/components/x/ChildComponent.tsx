import React from "react";
interface ChildComponentProps {
  parentData: string;
  updateChildData: (msg: string) => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ parentData, updateChildData }) => {
  const [childData, setChildData] = React.useState("john");

  const clickButton = () => {
    updateChildData(childData);
  };

  return (
    <>
      <div className="card">
        <div className="card-header bg-success text-white">Child Component</div>
        <div className="card-body bg-success-subtle">
          <h4>
            <span className="fw-bolf">Child-Data :</span> {childData}
          </h4>
          <h4>
            <span className="fw-bolf">Parernt-Msg :</span>{" "}
            <span className="text-primary">{parentData}</span>
          </h4>
          <button onClick={clickButton} className="btn btn-primary">
            Click
          </button>
        </div>
      </div>
    </>
  );
};

export default ChildComponent;
