import React from "react";
import MyCard from "./components/my-card/MyCard";


const App: React.FC = () => {
  return (
    <>
      <MyCard heading={"Good Morning"} />
      <MyCard heading={"Good Evening"} />
      <MyCard heading={"Good Afternoon"} />
      <MyCard heading={"Good Night"} />
    </>
  );
};

export default App;
