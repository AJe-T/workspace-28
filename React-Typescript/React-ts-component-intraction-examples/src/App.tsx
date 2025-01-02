import React from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import UserManger from "./components/example2/UserManger";
// import ParentComponent from "./components/example1/parentComponent";

const App: React.FC = () => {
  return (
    <>
      <NavBar
        heading="Component Intraction"
        bgColor="bg-info"
        color="navbar-light"
      />
      <div className="mt-4 root container">
        <UserManger/>
      </div>
    </>
  );
};

export default App;
