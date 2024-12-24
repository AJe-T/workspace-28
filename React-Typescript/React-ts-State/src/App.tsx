import React from "react";

import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import CardSection from "./components/cards/CardSection";
const App: React.FC = () => {
  return (
    <>
      <NavBar heading="State & Props" bgColor="bg-success" />
      <div className="mt-5 root container">
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
      </div>
    </>
  );
};

export default App;
