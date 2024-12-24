import React from "react";

interface IProps {
  heading: string;
  image: string;
}

const FoodCard: React.FC<IProps> = ({ heading, image }) => {
  return (
    <div className="card d-inline-block m-2 " style={{ width: "16rem" }}>
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
