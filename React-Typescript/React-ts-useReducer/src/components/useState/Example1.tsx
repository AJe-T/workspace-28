import React from "react";

const Example1: React.FC = () => {
  const [msg, setMsg] = React.useState<string>("Alex");

  const funGm = () => {
    setMsg("Good Morning");
  };
  const funGa = () => {
    setMsg("Good Afternoon");
  };
  const funGe = () => {
    setMsg("Good Evening");
  };

  return (
    <>
      <div className="card w-50 mt-5">
        <div className="card-header">
          <h1>useState</h1>
        </div>
        <div className="card-body">
          <p className="h3 mb-4">
            Hello <span>{msg}</span>
          </p>
          <button className="btn btn-success me-3" onClick={funGm}>
            Good Morning
          </button>
          <button className="btn btn-primary me-3" onClick={funGa}>
            Good Afternoon
          </button>
          <button className="btn btn-danger me-3" onClick={funGe}>
            Good Evening
          </button>
        </div>
      </div>
    </>
  );
};

export default Example1;
