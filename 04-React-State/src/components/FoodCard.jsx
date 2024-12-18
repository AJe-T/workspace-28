import React from "react";

const FoodCard = ({ image , heading}) => {
  return (
    <div className="card w-25 d-inline-block m-4 shadow-lg bg-danger-subtle">
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

export default FoodCard;
