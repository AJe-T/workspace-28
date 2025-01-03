import React, { createContext, useState } from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import FirstComponent from "./components/useContext/FirstComponent";
// import FirstBox from "./components/propsDrilling/FirstBox";

export const fullData = createContext("");

const App: React.FC = () => {
  const [data, setData] = useState<string>("Hello World");
  return (
    <>
      <NavBar heading="use Context" bgColor="bg-info" color="navbar-light" />
      <div className="mt-4 root container">
        <h1>This is a App Component - {data}</h1>
        {/* <FirstBox data={data} /> */}
        <fullData.Provider value={data}>
          <FirstComponent />
        </fullData.Provider>
      </div>
    </>
  );
};

export default App;
