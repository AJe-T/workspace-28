import React from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Example2 from "./components/useReducer/Example2";
// import Example1 from "./components/useState/example1";

const App: React.FC = () => {

  return (
    <>
      <NavBar
        heading="useState Example"
        bgColor="bg-info"
        color="navbar-light"
      />
      <div className="mt-4 root container">
        {/* <h1>This is a App Component</h1> */}
        {/* <Example1 /> */}
        <Example2/>
      </div>
    </>
  );
};

export default App;
