import React from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import FoodCard from "./components/food-card/FoodCard";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
const App: React.FC = () => {
  return (
    <>
      <NavBar heading="Bootstrap & Props" bgColor="bg-danger" />
      <div
        className="mt-5 root container
      "
      >
        <FoodCard image={img1} heading={"Fruits"} />
        <FoodCard image={img2} heading={"Noodels"} />
        <FoodCard image={img3} heading={"Pan Cake"} />
        <FoodCard image={img4} heading={"Burger"} />
      </div>
    </>
  );
};

export default App;
