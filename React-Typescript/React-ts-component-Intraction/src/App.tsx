import React from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ParentComponent from "./components/x/parentComponent";

const App: React.FC = () => {
  return (
    <>
      <NavBar
        heading="Component Intraction"
        bgColor="bg-info"
        color="navbar-light"
      />
      <div className="mt-5 root container">
        <ParentComponent/>
      </div>
    </>
  );
};

export default App;
