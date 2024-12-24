import React, { useState } from "react";

const Example1: React.FC = () => {
  const [num, setNum] = useState<number>(0);

  const IncrFun = (): void => {
    setNum(num + 1);
  };
  const DecrFun = (): void => {
    setNum(num - 1 > 0 ? num - 1 : 0);
  };

  const IncrByValue = (value: number): void => {
    setNum(num + value);
  };
  const DecrByValue = (value: number): void => {
    setNum(num - value > 0 ? num - value : 0);
  };
  return (
    <>
      <div className="card mt-5 shadow-lg w-25">
        <div className="card-header">
          <h1 className="" style={{ textAlign: "center" }}>
            {num}
          </h1>
        </div>
        <div className="card-body">
          <button onClick={IncrFun} className="btn btn-primary me-3">
            Increment
          </button>
          <button onClick={DecrFun} className="btn btn-danger">
            Decrement
          </button>
          <button
            onClick={() => {
              IncrByValue(5);
            }}
            className="btn btn-primary me-3 mt-3"
          >
            IncrBy5
          </button>
          <button
            onClick={() => {
              DecrByValue(5);
            }}
            className="btn btn-danger mt-3 "
          >
            DecrBy5
          </button>
        </div>
      </div>
    </>
  );
};

export default Example1;
