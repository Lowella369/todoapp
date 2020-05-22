import React from "react";
import NavTab from "./NavTab.jsx";
import "./css/style.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavTab to="/about" label="About" />
      <NavTab to="/todos" label="Todos" />
      <NavTab to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;
