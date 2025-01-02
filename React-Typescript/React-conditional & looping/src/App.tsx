import React from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
// import Cart from "./components/WatchCart/Cart";
import CartPage from "./components/WatchCart/CartPage";

const App: React.FC = () => {
  return (
    <>
      <NavBar
        heading="Events Examples"
        bgColor="bg-info"
        color="navbar-light"
      />
      <div className="mt-5 root container">
        {/* <h1>This is a App component</h1> */}
        {/* <Cart /> */}
        <CartPage/>
      </div>
    </>
  );
};

export default App;
