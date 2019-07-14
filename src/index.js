import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";

//
import Home from "../public/Components/Home";
import Contacts from "../public/Components/Contacts";
import About from "../public/Components/About";
import PageNotFound from "../public/Components/PageNotFound";

function App() {
  return (
    <>
      <ul
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/about" component={About} exact />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
