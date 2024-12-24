import React from "react";

interface IProps {
  image: string;
  heading: string;
}

const TourCard: React.FC<IProps> = ({ heading, image }) => {
  return (
    <div className="card d-inline-block m-2 shadow-lg bg-danger-subtle" style={{ width: "16rem" }}>
      <div className="card-header">
        <img src={image} alt="img1" className="img-fluid h-25" />
      </div>
      <div className="card-body">
        <h1>{heading}</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default TourCard;
