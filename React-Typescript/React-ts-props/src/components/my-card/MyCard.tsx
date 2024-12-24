import React from "react";
import "./MyCard.css";

interface Iprops {
  heading: string;
}

const MyCard: React.FC<Iprops> = ({ heading }) => {
  return (
    <>
      <div className="card">
        <h1>{heading}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          asperiores itaque perspiciatis numquam! Quasi consectetur minus eos,
          alias officia similique officiis nemo tempora perspiciatis ad?
        </p>
      </div>
    </>
  );
};

export default MyCard;
