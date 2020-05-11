import React from "react";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import "./styles.css";

import NavBar from "./components/NavBar.jsx";

import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Todo from "./components/Todo.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/todos" component={Todo} />
          <Route path="/contact" component={null} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
