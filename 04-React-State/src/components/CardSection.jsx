// import React from "react";

import { useState } from "react";
import FoodCard from "./FoodCard";
import tourData from "../services/tourCards";

const CardSection = () => {
  const [cards, setCards] = useState(tourData);

  return (
    <div className="container mt-5">
      {cards.map((item, index) => {
        return <FoodCard key={index} image={item.img} heading={item.name} />;
      })}
    </div>
  );
};

export default CardSection;
