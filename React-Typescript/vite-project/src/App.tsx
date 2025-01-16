import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/static/navbar/Navbar";
import Home from "./components/static/Home/Home";
import ContactManager from "./components/Dynamic/contactManager/ContactManager";
import NotFound from "./components/static/notFound/NotFound";
import AddContact from "./components/Dynamic/addContact/AddContact";
import DeleteContact from "./components/Dynamic/deleteContact/DeleteContact";
import UpdateContact from "./components/Dynamic/updateContact/UpdateContact";
import ViewContact from "./components/Dynamic/viewContact/ViewContact";
import CreateContact from "./components/Dynamic/createContact/CreateContact";
import Login from "./components/Dynamic/login/Login";
import Register from "./components/Dynamic/register/Register";

const App: React.FC = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-manager" element={<ContactManager />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/delete-contact" element={<DeleteContact />} />
            <Route path="/update-contact" element={<UpdateContact />} />
            <Route path="/view-contact" element={<ViewContact />} />
            <Route path="/create-contact" element={<CreateContact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
