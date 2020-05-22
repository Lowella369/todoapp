import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = props => {
  var activeStyle = {
    color: "#bafae7",
    fontWeight: "bold"
  };

  var navStyle = {
    margin: "2rem",
    textDecoration: "none",
    fontSize: "1rem",
    color: "#f6fbfa",
    display: "inline"
  };

  return (
    <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavTab;
