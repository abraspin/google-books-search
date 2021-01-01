import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const [pageSelected, setPageSelected] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="col-md-6 pl-5">
        <a className="navbar-brand" href={"/"}>
          Book Search
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      {/* Navigation menu items  */}
      <div className="col-md-6 float-right pr-5">
        <div className="row float-right ">
          <div
            className="collapse navbar-collapse float-right"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  float-right">
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Saved" className="nav-link">
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
