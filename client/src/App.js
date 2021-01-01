import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import { useEffect, useState, Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="content">
        <Router>
          <NavBar> </NavBar>
          <Header></Header>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route exact path="/Saved">
              <Saved />
            </Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
