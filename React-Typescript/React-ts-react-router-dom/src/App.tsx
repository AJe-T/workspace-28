import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";
import Services from "./components/pages/services/Services";
import Contact from "./components/pages/contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
