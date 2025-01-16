import React from "react";
interface IProps {
  message: string;
}

const ErrorMsg: React.FC<IProps> = ({ message }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="h2 text-danger mt-5">Error Occuered</p>
          <p>
            This is the Error --{" "}
            <span className="text-danger fw-bold"> {message}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMsg;
