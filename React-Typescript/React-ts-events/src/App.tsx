import React from "react";

import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
// import Example1 from "./components/examples/example1/Example1";
import Mobile from "./components/examples/example2/Mobile";

const App: React.FC = () => {
  return (
    <>
      <NavBar
        heading="Events Examples"
        bgColor="bg-warning"
        color="navbar-light"
      />
      <div className="mt-5 root container">
        {/* <Example1 /> */}
        <Mobile/>
      </div>
    </>
  );
};

export default App;
