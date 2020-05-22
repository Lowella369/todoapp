import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Todo from "./components/Todo.js";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/todos" component={Todo} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <div className="footer">
          <p>Copyright Lowella 2020</p>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
