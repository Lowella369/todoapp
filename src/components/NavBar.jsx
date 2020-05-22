import React from "react";
import NavTab from "./NavTab.jsx";
import "./css/style.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">Todo App </div>
      <NavTab to="/about" label="About" />
      <NavTab to="/todos" label="Todos" />
      <NavTab to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;
