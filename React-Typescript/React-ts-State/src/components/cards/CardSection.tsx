import React from "react";
import { ITour } from "../../models/Itour";
import { useState } from "react";
import tourData from "../../services/tourServices";
import TourCard from "../cards/TourCard";

const CardSection: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cards, setCards] = useState<ITour[]>(tourData);
  return (
    <>
      {cards.map((item, index) => {
        return <TourCard key={index} image={item.img} heading={item.name} />;
      })}
    </>
  );
};

export default CardSection;
