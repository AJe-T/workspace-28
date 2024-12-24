import React from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Login from "./components/login/Login";

const App: React.FC = () => {
  return (
    <>
      <NavBar
        heading="Form Examples"
        bgColor="bg-primary"
        color="navbar-light"
      />
      <div className="mt-5 root container">
        <Login />
      </div>
    </>
  );
};

export default App;
